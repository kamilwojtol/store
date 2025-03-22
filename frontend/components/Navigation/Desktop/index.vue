<script lang="ts" setup></script>

<template>
  <div class="desktop-navigation flex flex-row items-center w-full">
    <Logo />
    <ul class="flex flex-row gap-2 ml-4">
      <li>
        <NuxtLink to="/">HOME</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/category/men">MEN</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/category/women">WOMEN</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about-us">ABOUT US</NuxtLink>
      </li>
    </ul>
    <div class="flex ml-auto mr-4 gap-2">
      <NuxtLink to="/favourites">FAVOURITES</NuxtLink>
      <NuxtLink to="/cart">CART</NuxtLink>
    </div>
  </div>
</template>
