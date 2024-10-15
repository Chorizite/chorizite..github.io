<script setup lang="ts">
definePageMeta({
  layout: "headeronly",
  documentDriven: false
}) 
</script>
<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4">Chorizite</h2>
        <p class="text-xl mb-8">An open-source plugin manager for Asheron's Call</p>
        <a href="#installation" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">Get Started</a>
      </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Project Overview</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Chorizite.Core</h3>
            <p>The main Chorizite project responsible for starting up the plugin system.</p>
          </div>
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Launcher</h3>
            <p>Implements the required backend interfaces for running Chorizite.Core in a launcher environment.</p>
          </div>
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Chorizite.Injector</h3>
            <p>Launches acclient and uses Chorizite.Bootstrapper to inject Chorizite.Loader.Standalone.</p>
          </div>
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Core Plugins</h3>
            <ul class="list-disc list-inside">
              <li>Core.Client</li>
              <li>Core.Launcher</li>
              <li>Core.DatService</li>
              <li>Core.UI</li>
              <li>Core.Lua</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section id="installation" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Installation</h2>
        <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">Dependencies</h3>
          <ul class="list-disc list-inside mb-4">
            <li>.NET 8.0+</li>
            <li>Microsoft Visual C++ Redistributable</li>
          </ul>
          <p class="font-semibold">To install:</p>
          <ol class="list-decimal list-inside">
            <li>Install Dependencies</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section id="roadmap" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Roadmap</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">Plugin System</h3>
            <ul class="list-disc list-inside">
              <li>CSharp plugins</li>
              <li>Lua plugins</li>
            </ul>
          </div>
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">UI</h3>
            <ul class="list-disc list-inside">
              <li>Launcher Screens: Simple, Advanced</li>
              <li>Game screens: DatPatch, Intro, CharSelect, GamePlay, Disconnected</li>
              <li>Lua scripting within rmlui</li>
              <li>ImGui</li>
            </ul>
          </div>
          <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4">API & Server Integration</h3>
            <ul class="list-disc list-inside">
              <li>Game API / Hooks</li>
              <li>Custom UIs from server</li>
              <li>Custom plugins from server</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contributing Section -->
    <section id="contributing" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Contributing</h2>
        <div class="dark:bg-gray-700 bg-gray-200 p-6 rounded-lg shadow">
          <p class="mb-4">Contributions are welcome! To contribute:</p>
          <ol class="list-decimal list-inside">
            <li>Fork the repository.</li>
            <li>Create a new branch for your feature or bugfix.</li>
            <li>Submit a pull request with a detailed description.</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Chorizite. All rights reserved.</p>
        <p class="mt-2">This project is licensed under the MIT License.</p>
      </div>
    </footer>
  </div>
</template>