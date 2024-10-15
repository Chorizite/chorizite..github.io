<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set (newValue) {
    colorMode.preference = newValue ? 'dark' : 'light'
  }
})

const nav = [
  { title: 'Releases', _path: '/releases', icon: 'i-material-symbols-cloud-download-outline' },
  { title: 'Plugins', _path: '/plugins', icon: 'i-material-symbols-power-plug-outline' },
  { title: 'Documentation', _path: '/docs', icon: 'i-material-symbols-energy-program-saving-outline' },
]

const { appNavOverlayShown } = useAppState()

watch(appNavOverlayShown, () => {
  if (!appNavOverlayShown.value) {
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
  }
  else {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }
})

function getLink(link: NavItem) : string {
  if (link.id) return (link.path || link._path) 
  return link.children ? getLink(link.children[0]) : (link.path || link._path)
}

</script>
<template>
  <nav :class="`${appNavOverlayShown ? 'fixed top-0' : ''} dark:text-white text-gray-600 z-50 md:sticky md:top-0 backdrop-blur-md dark:backdrop-brightness-75 backdrop-brightness-95 backdrop-filter w-full`">
    <div class="md:h-[theme(headerHeight)] flex px-1">
      <NuxtLink to="/">
        <Logo class="w-10 inline h-[theme(headerHeight)] align-middle" />
        <strong class="text-xl relative top-1">Chorizite</strong>
      </NuxtLink>
      <div class="flex-grow"></div>
      <div class="text-center lg:block hidden flex-grow-[12]">
          <NuxtLink
            v-for="link of nav"
            :key="link._path"
            :to="getLink(link)"
          >
            <UButton variant="link" :icon="link.icon" class="h-[theme(headerHeight)] align-middle">
              {{ link.title }}
            </UButton>
          </NuxtLink>
      </div> 
      <div class="text-right items-center flex pr-2">
        <ClientOnly>
            <UTooltip text="Toggle dark mode">
              <a href="#toggledarkmode" @click.prevent="isDark = !isDark" title="Toggle Dark Mode" class="md:inline hidden pr-1">
                <UIcon :name="isDark ? 'i-material-symbols-dark-mode' : 'i-material-symbols-dark-mode'" aria-valuetext="Toggle Dark Mode" class="w-6 h-6 align-middle" />
              </a>
            </UTooltip>
          <template #fallback>
            <div class="w-6 h-6 align-middle md:inline hidden" />
          </template>
        </ClientOnly>
        <UTooltip text="Discord">
          <a href="https://discord.gg/c75pPaz" target="_blank" class="align-middle px-2 md:inline hidden" title="Discord">
            <UIcon name="i-simple-icons-discord" aria-valuetext="Discord" class="w-6 h-6 align-middle" />
          </a>
        </UTooltip>
        <UTooltip text="Gitlab">
          <a href="https://github.com/chorizite/" target="_blank" class="align-middle px-2 md:inline hidden" title="GitHub">
            <UIcon name="i-simple-icons-github" aria-valuetext="GitHub" class="w-6 h-6 align-middle" />
          </a>
        </UTooltip>
      </div>
      <div class="lg:hidden block mt-3 mr-2">
        <div :class="{ open: appNavOverlayShown, hamburger: true }" @click.prevent="appNavOverlayShown=!appNavOverlayShown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`${appNavOverlayShown ? 'h-screen overflow-y-auto' : 'h-0 overflow-y-hidden'} z-50 dark:bg-zinc-950 bg-white w-screen fixed top-[theme(headerHeight)] text-primary-600 dark:text-primary-400 text-sm transition-all motion-reduce:transition-none`">
    <div class="overflow-y-auto border-b border-t border-gray-700 dark:text-white text-black">
      <ul class="p-2 text-xs">
        <li v-for="link of nav" :key="link._path">
          <NuxtLink :to="getLink(link)" @click="appNavOverlayShown=false">
            <UButton variant="link" :icon="link.icon" class="h-[theme(headerHeight)] align-middle" size="xl">
              {{ link.title }}
            </UButton>
          </NuxtLink>
        </li>
      </ul>
      <hr class="dark:border-gray-800 m-2" />
      <div class="h-10 p-2 text-center">
        <ClientOnly>
          <span class="align-middle text-gray-500 pr-2">Appearance: </span>
          <UToggle v-model="isDark" on-icon="i-material-symbols-dark-mode" off-icon="i-material-symbols-light-mode" class="align-middle" />
          <template #fallback>
            <div class="w-5 h-2 inline-block" />
          </template>
        </ClientOnly>
      </div>
      <div class="text-center p-4">
        <a href="https://discord.gg/c75pPaz" target="_blank" class="p-3">
          <UIcon name="i-simple-icons-discord" class="p-2" />
        </a>
        <a href="https://github.com/chorizite/" target="_blank" class="p-3 pr-4" title="GitHub">
          <UIcon name="i-simple-icons-github" aria-valuetext="GitHub" class="p-2" />
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hamburger {
  --hamburger-width: calc(theme(headerHeight) - 20px);
  width: var(--hamburger-width);
  height: var(--hamburger-width);
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  @apply bg-primary-500;
  display: block;
  position: absolute;
  height: calc(var(--hamburger-width) / 6);
  width: 100%;
  border-radius: calc(var(--hamburger-width) / 6);
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger span:nth-child(2) {
  top: calc(var(--hamburger-width) / 3);
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger span:nth-child(3) {
  top: calc(var(--hamburger-width) / 3 * 1.9);
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 1px;
  left: 3px;
}

.hamburger.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: calc(var(--hamburger-width) - 6px);
  left: 3px;
}
</style>