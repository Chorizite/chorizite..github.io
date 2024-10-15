<template>
  <div class=" bg-zinc-100 dark:bg-[#1c1b22]">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
* {
  scrollbar-color: rgb(var(--color-gray-500) / 0.4) rgb(var(--color-gray-300) / 0.4);
  scrollbar-width: thin;
}
.dark *, .dark {
  scrollbar-color: rgb(var(--color-gray-600) / 0.4) rgb(var(--color-gray-900) / 0.4);
}

.content {
  overflow-wrap: anywhere;
  word-break: normal
}

.content a {
  position: relative;
  text-decoration: none;
}

.content a::after {
  @apply border-b border-dashed bottom-[0px] h-0 absolute left-0 right-0;
  content: '';
}

.content :where(h1,h2,h3,h4,h5,h6) a::after, .content a.no-underline::after, .content .no-underline a::after {
  @apply border-none;
  content: '';
}

table h2, table h3, table h4, table h5, table h6 {
  @apply xl:scroll-mt-[calc((theme(headerTocHeight)*2)+8px)] md:scroll-mt-[calc(((theme(headerHeight)*2)+8px)+theme(headerTocHeight))] scroll-mt-[calc((theme(headerTocHeight)*2)+8px)];
}

table h2, table h3, table h4, table h5, table h6 {
  @apply xl:scroll-mt-[calc((theme(headerTocHeight)*2)+8px)] md:scroll-mt-[calc(((theme(headerHeight)*2)+8px)+theme(headerTocHeight))] scroll-mt-[calc((theme(headerTocHeight)*2)+8px)];
}

h1, h2, h3, h4, h5, h6 {
  @apply xl:scroll-mt-[calc(theme(headerTocHeight))] md:scroll-mt-[calc(theme(headerHeight)+theme(headerTocHeight))] scroll-mt-[calc(theme(headerTocHeight))];
}

.prose :where(h1,h2,h3,h4,h5,h6)>a:not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  text-decoration: none;
}

.prose-base :where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  @apply mt-4 pt-4;
}

.prose-base :where(h3):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  @apply mt-3 pt-3;
}

.prose-base :where(h4):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  @apply mt-3 pt-3;
}

.prose-base :where(h5):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  @apply mt-1 pt-3;
}

.prose-base :where(h6):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  @apply mt-1 pt-3;
}

table thead td {
  @apply whitespace-nowrap;
}

.scroll-wrapper {
  --pre-gutter-width: 48px;
  @apply w-[calc(100vw)] overflow-x-auto;
}

.modal .scroll-wrapper {
  --pre-gutter-width: 48px;
  @apply w-[calc(200px)] overflow-x-auto;
}

.table-header {
  --pre-gutter-width: 48px;
  @apply w-[calc(100vw)]
}

.has-nav .scroll-wrapper, .has-nav .table-header {
  @apply md:w-[calc(100vw_-_theme(sideNavWidth)_-_var(--pre-gutter-width))]  w-[calc(100vw_-_var(--pre-gutter-width))] 
}

.has-nav .modal .scroll-wrapper, .has-nav .modal .table-header {
  @apply w-full
}

.has-toc.has-nav .scroll-wrapper, .has-toc.has-nav .table-header {
  @apply xl:w-[calc(100vw_-_theme(tocWidth)_-_theme(sideNavWidth)_-_var(--pre-gutter-width))] md:w-[calc(100vw_-_theme(sideNavWidth)_-_var(--pre-gutter-width))]  w-[calc(100vw_-_var(--pre-gutter-width))] 
}

.has-nav .modal .scroll-wrapper, .has-nav .modal .table-header {
  @apply w-full
}

.has-toc.has-nav .scroll-wrapper, .has-toc.has-nav .table-header {
  @apply xl:w-[calc(100vw_-_theme(tocWidth)_-_theme(sideNavWidth)_-_var(--pre-gutter-width))] md:w-[calc(100vw_-_theme(sideNavWidth)_-_var(--pre-gutter-width))]  w-[calc(100vw_-_var(--pre-gutter-width))] 
}

.has-toc.has-nav .modal .scroll-wrapper, .has-toc.has-nav .modal .table-header {
  @apply w-full
}

.fade-in-out {
    animation: fadeinout 1.5s infinite;
}

body .prose {
  max-width: unset;
}

@keyframes fadeinout {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.2;
  }
}
</style>