---
layout: "layouts/page"
eleventyNavigation:
  key: search
  title: Search
  order: 4
title: "Search our Vegan Recipes"
description: "Find the perfect recipe from expert chefs on recipe.polente.de. Search, discover, and get inspired!"
permalink: "/search/index.html"
---

## Fallback search

Discover culinary inspiration. Our intuitive search lets you explore recipes from professional chefs with ease. Whether you're craving classic comfort food or seeking creative new dishes, our expertly curated collection caters to all tastes. Start your gastronomic adventure today and find the perfect recipe for any occasion!

Start typing and you get a list of results, or use the button to search with google.

<form action="https://www.google.de/search" method="get" target="_blank" class="search">   
    <input type="hidden" name="q" id="q" value="site:https://recipe.polente.de">   
    <label for="search-str">Search</label><br />
    <input type="text" name="q" id="search-str"></p>   
    <button type="submit" class="submit">Search with Google - opens new Window/Tab</button>   
</form>

## Search Results

<ul id="results"><li>Nothing found yet</li></ul>

<script src="/js/search.js" async defer></script>