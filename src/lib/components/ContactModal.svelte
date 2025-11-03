<script lang="ts">
  import { contactModalOpen } from '$lib/stores.js';
  import { fly } from 'svelte/transition';
  import { enhance } from '$app/forms';
  import { navigating } from '$app/stores';
  import type { ActionResult } from '@sveltejs/kit';

  // --- Form State ---
  interface FormErrors {
    name?: string;
    email?: string;
    whatsapp?: string;
    contact?: string;
    message?: string;
  }

  let name = '';
  let email = '';
  let whatsapp = '';
  let message = '';
  let errors: FormErrors = {};
  let showSuccessMessage = false; // <-- New state for the success message

  $: submitting = $navigating && $navigating.type === 'form';

  function closeModal() {
    $contactModalOpen = false;
    // Reset success state after modal transition finishes
    setTimeout(() => {
      showSuccessMessage = false;
    }, 300);
  }

  function resetForm() {
    name = '';
    email = '';
    whatsapp = '';
    message = '';
    errors = {};
  }

  // This function runs after the form action completes
  /**
   * @param {{ result: ActionResult }} { result }
   */
  function onFormResult({ result }: { result: ActionResult }) {
    if (result.type === 'success') {
      resetForm();

      if (result.data?.whatsappLink) {
        // --- WhatsApp Path ---
        // 1. Just navigate. The server sent the email.
        window.location.href = result.data.whatsappLink;
        // 2. Close the modal.
        closeModal();
      } else {
        // --- Email-Only Path ---
        // 1. Show the elegant success message
        showSuccessMessage = true;

        // 2. Automatically close the modal after 2.5 seconds
        setTimeout(() => {
          closeModal();
        }, 2500);
      }
    } else if (result.type === 'failure') {
      // If validation fails, update our errors object
      errors = result.data?.errors || {};
    }
  }
</script>

{#if $contactModalOpen}
  <div
    class="fixed inset-0 z-40 bg-black bg-opacity-50 flex 
           justify-center items-center p-4"
    on:click|self={closeModal}
  >
    <div
      class="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md 
             overflow-hidden transition-all"
      style="min-height: 500px;"
      transition:fly={{ y: -50, duration: 300 }}
    >
      {#if showSuccessMessage}
        <div class="flex flex-col h-full justify-center items-center text-center">
          <svg
            class="w-16 h-16 text-green-500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 class="text-2xl font-bold mt-4">Pesan Terkirim!</h2>
          <p class="text-gray-600 mt-2">
            Terima kasih telah menghubungi. Kami akan segera menghubungi Anda.
          </p>
        </div>
      {:else}
        <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">Hubungi Kami</h2>
            <button on:click={closeModal} aria-label="Tutup modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500 hover:text-gray-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form
            method="POST"
            action="?/sendEmail"
            class="space-y-4"
            use:enhance={() => {
              errors = {};
              return onFormResult;
            }}
          >
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nama*</label>
              <input
                bind:value={name}
                name="name"
                type="text"
                id="name"
                class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                       focus:ring-orange-500 focus:border-orange-500"
                class:border-red-500={errors.name}
              />
              {#if errors.name}
                <p class="text-red-600 text-sm mt-1">{errors.name}</p>
              {/if}
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                bind:value={email}
                name="email"
                type="email"
                id="email"
                class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                       focus:ring-orange-500 focus:border-orange-500"
                class:border-red-500={errors.contact || errors.email}
              />
              {#if errors.email}
                <p class="text-red-600 text-sm mt-1">{errors.email}</p>
              {/if}
            </div>

            <div class="flex items-center">
              <hr class="flex-grow border-t border-gray-300" />
              <span class="px-2 text-sm text-gray-500">ATAU</span>
              <hr class="flex-grow border-t border-gray-300" />
            </div>

            <div>
              <label for="whatsapp" class="block text-sm font-medium text-gray-700">
                Nomor WhatsApp
              </label>
              <input
                bind:value={whatsapp}
                name="whatsapp"
                type="tel"
                id="whatsapp"
                placeholder="0812 3456 7890"
                class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                       focus:ring-orange-500 focus:border-orange-500"
                class:border-red-500={errors.contact || errors.whatsapp}
              />
              {#if errors.whatsapp}
                <p class="text-red-600 text-sm mt-1">{errors.whatsapp}</p>
              {/if}
              {#if errors.contact}
                <p class="text-red-600 text-sm mt-1">{errors.contact}</p>
              {/if}
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">
                Apa yang bisa kami bantu?*
              </label>
              <textarea
                bind:value={message}
                name="message"
                id="message"
                rows="4"
                class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                       focus:ring-orange-500 focus:border-orange-500"
                class:border-red-500={errors.message}
              ></textarea>
              {#if errors.message}
                <p class="text-red-600 text-sm mt-1">{errors.message}</p>
              {/if}
            </div>

            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold rounded 
                       bg-orange-600 text-gray-50 hover:bg-orange-700 
                       transition-all duration-300 active:scale-95 disabled:opacity-50"
                disabled={submitting}
              >
                {submitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>
        </div>
      {/if}
    </div>
  </div>
{/if}