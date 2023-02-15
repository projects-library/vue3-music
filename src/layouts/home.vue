<template>
  <div class="min-h-screen flex flex-col bg-var(--global-bg-color)">
    <Header />
    <div class="flex justify-start flex-grow">
      <Nav />
      <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200 flex-1">
        <RouterView />
        <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
          [Home Layout]
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>
