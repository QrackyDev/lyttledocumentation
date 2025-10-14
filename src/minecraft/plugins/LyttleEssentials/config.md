---
lang: en-US
title: LyttleEssentials | Config
description: The config from the LyttleEssentials plugin, with explanation.
---

## How to guides
How to ... guides for LyttleNametag.

---

**How to use placeholders**

How to use placeholders in nametags. 
LyttleNametag has build in placeholders and supports [PlaceholderAPI](https://hangar.papermc.io/HelpChat/PlaceholderAPI).

Build in placeholders:
- `<PLAYER>`
- `{player_health}`

If you want to use [PlaceholderAPI](https://hangar.papermc.io/HelpChat/PlaceholderAPI) placeholders, make sure you dont forget to surround the placholder with a `%`.

> To use placholders from [PlaceholderAPI](https://hangar.papermc.io/HelpChat/PlaceholderAPI), make sure you downloaded the correct [expansions](https://api.extendedclip.com/all/) and reloaded PlaceholderAPI using: `/papi reload`


---
**How to color format**

LyttleNametag uses the [MiniMessage](https://docs.advntr.dev/minimessage/) format. If you dont know how  to use [MiniMessage](https://docs.advntr.dev/minimessage/), use any of the following:

- Read the format [here](https://docs.advntr.dev/minimessage/format.html).
- Use the online web editor/viewer [here](https://webui.advntr.dev).

---
**How to choose the best refresh interval**

The interval makes it so your nametag and placeholders update on a specific interval. Choosing the best interval is needed for performance, and if your placeholder requires a specific refresh interval to be precise (for example: health). *Default value: 0.5*

For almost most uses, keep it on default. This will keep things precise, while (in our testing) does not affect performance in a noticable negative way. If you are not using placeholders that need to be updated frequently however, we highly recommend you to decrease the value.

---
**How to choose the best view distance**

The view distance decides from how far away (in blocks) you can see the nametag. If a player goes further then the value, the nametag will disappear for that player. The nametag will not be shown through blocks, even if unshifted (this will change in the future). 

We dont recommend to go above 3 digits (Example: 100), as this could lead to weird bugs. For most people, the default value (64) is enough, but 32 is also a very good option.
