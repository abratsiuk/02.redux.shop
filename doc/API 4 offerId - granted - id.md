В данном JSON-объекте связь между `offerId` и `id` (из объектов в `granted`) заключается в следующем:

- **`offerId`** – это идентификатор всего предложения (бандла, набора предметов), например, `"v2:/ddff4143ad9845f4fc27c4b6ce4dd553919ab05cec63a3b8a69b20cdc932e920"`. Он уникален для всего комплекта предметов, представленного в магазине.

- **`id`** внутри массива `granted` – это уникальные идентификаторы отдельных предметов, входящих в этот комплект. Например, `"CID_416_Athena_Commando_M_AssassinSuit"` для скина Джона Уика или `"Pickaxe_ID_213_AssassinSuitSledgehammer"` для кувалды.

### Как они связаны:
1. `offerId` относится ко всему комплекту (`bundle`).
2. `granted` содержит список предметов, которые входят в этот `offerId`, и у каждого из них есть свой `id`.
3. Когда игрок покупает комплект (по `offerId`), он получает все предметы, перечисленные в `granted` (по их `id`).

Таким образом, `offerId` – это ключ к покупке целого набора, а `id` внутри `granted` – это идентификаторы отдельных предметов, входящих в этот набор.


```json
        {
            "mainId": "AssassinSuit_Bundle",
            "displayName": "Комплект «Джон Уик»",
            "displayDescription": "",
            "displayType": "Комплект предметов",
            "mainType": "bundle",
            "offerId": "v2:/ddff4143ad9845f4fc27c4b6ce4dd553919ab05cec63a3b8a69b20cdc932e920",
            "devName": "[VIRTUAL]1 x John Wick, 1 x Assassin Pack, 1 x Simple Sledge, 1 x Wick's Katana, 1 x Wick's Katana, 1 x Assassin for -1 MtxCurrency",
            "webURL": "/item-shop/bundles/john-wick-bundle-bf4f17ee",
            "offerDates": {
                "in": "2025-03-03T00:00:00.000Z",
                "out": "2025-03-05T23:59:59.999Z"
            },
            "colors": {
                "color1": "#81858d",
                "color2": "#52555a",
                "color3": "#232426",
                "textBackgroundColor": "#232426"
            },
            "displayAssets": [
                {
                    "displayAsset": "DAv2_Bundle_Featured_AssassinSuit",
                    "materialInstance": "MI_0",
                    "primaryMode": "MAX",
                    "productTag": "Product.BR",
                    "url": "https://media.fortniteapi.io/images/displayAssets/v2/MAX/DAv2_Bundle_Featured_AssassinSuit/MI_0.png",
                    "flipbook": null,
                    "background_texture": null,
                    "background": "https://media.fortniteapi.io/images/shop/ddff4143ad9845f4fc27c4b6ce4dd553919ab05cec63a3b8a69b20cdc932e920/v2/MI_0/background.png",
                    "full_background": "https://media.fortniteapi.io/images/shop/ddff4143ad9845f4fc27c4b6ce4dd553919ab05cec63a3b8a69b20cdc932e920/v2/MI_0/info.ru.png"
                }
            ],
            "firstReleaseDate": "2024-05-19",
            "previousReleaseDate": "2025-03-03",
            "giftAllowed": true,
            "buyAllowed": true,
            "price": {
                "regularPrice": 3300,
                "finalPrice": 2400,
                "floorPrice": 100
            },
            "rarity": {
                "id": "Legendary",
                "name": "ЛЕГЕНДАРНЫЙ"
            },
            "series": null,
            "banner": {
                "id": "vbucksoff",
                "name": "Скидка: 900 В-баксов",
                "intensity": "Low"
            },
            "offerTag": null,
            "granted": [
                {
                    "id": "CID_416_Athena_Commando_M_AssassinSuit",
                    "type": {
                        "id": "outfit",
                        "name": "Экипировка"
                    },
                    "name": "Джон Уик",
                    "description": "Каждое действие имеет последствия.",
                    "rarity": {
                        "id": "Legendary",
                        "name": "ЛЕГЕНДАРНЫЙ"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/46c716ab2a39918a9825a2847455aaed/transparent.png",
                        "featured": null,
                        "background": "https://media.fortniteapi.io/images/cosmetics/46c716ab2a39918a9825a2847455aaed/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/46c716ab2a39918a9825a2847455aaed/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/46c716ab2a39918a9825a2847455aaed/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.UserFacingFlags.HasVariants",
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.AssassinSuit",
                        "Cosmetics.Filter.Season.9",
                        "SoundLibrary.ID.StepType.ShoesDress",
                        "SoundLibrary.ID.ClothingType.Generic",
                        "SoundLibrary.ID.HandType.Bare",
                        "Cosmetics.FrontEndPose.DontCrossArms"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                },
                {
                    "id": "BID_271_AssassinSuitMale",
                    "type": {
                        "id": "backpack",
                        "name": "Украшение на спину"
                    },
                    "name": "Сумка с оружием",
                    "description": "Готов ко всему.",
                    "rarity": {
                        "id": "Legendary",
                        "name": "ЛЕГЕНДАРНЫЙ"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/fd126022831a27e5060ac7ab82e6bb11/transparent.png",
                        "featured": null,
                        "background": "https://media.fortniteapi.io/images/cosmetics/fd126022831a27e5060ac7ab82e6bb11/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/fd126022831a27e5060ac7ab82e6bb11/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/fd126022831a27e5060ac7ab82e6bb11/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.AssassinSuit",
                        "Cosmetics.Filter.Season.9"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                },
                {
                    "id": "Pickaxe_ID_213_AssassinSuitSledgehammer",
                    "type": {
                        "id": "pickaxe",
                        "name": "Кирки"
                    },
                    "name": "Кувалда",
                    "description": "Выбор настоящего профессионала.",
                    "rarity": {
                        "id": "Uncommon",
                        "name": "НЕОБЫЧНЫЙ"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/a4166a6498e089366e78637f9aff0367/transparent.png",
                        "featured": "https://media.fortniteapi.io/images/a4166a6498e089366e78637f9aff0367/full_featured.png",
                        "background": "https://media.fortniteapi.io/images/cosmetics/a4166a6498e089366e78637f9aff0367/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/a4166a6498e089366e78637f9aff0367/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/a4166a6498e089366e78637f9aff0367/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.Set.AssassinSuit",
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Filter.Season.9"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                },
                {
                    "id": "Backpack_TracePaper",
                    "type": {
                        "id": "backpack",
                        "name": "Украшение на спину"
                    },
                    "name": "Катана Уика",
                    "description": "На случай если у цели клинок, а у вас закончились патроны.",
                    "rarity": {
                        "id": "Epic",
                        "name": "Эпический"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/4c19d7f9f6b370db402fceee72b866bc/transparent.png",
                        "featured": null,
                        "background": "https://media.fortniteapi.io/images/cosmetics/4c19d7f9f6b370db402fceee72b866bc/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/4c19d7f9f6b370db402fceee72b866bc/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/4c19d7f9f6b370db402fceee72b866bc/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.Filter.Season.28",
                        "Cosmetics.Set.AssassinSuit",
                        "Cosmetics.Source.ItemShop"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                },
                {
                    "id": "Pickaxe_TracePaper",
                    "type": {
                        "id": "pickaxe",
                        "name": "Кирки"
                    },
                    "name": "Катана Уика",
                    "description": "На случай если у цели клинок, а у вас закончились патроны.",
                    "rarity": {
                        "id": "Uncommon",
                        "name": "НЕОБЫЧНЫЙ"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/8854b67f98652e27fcf191d23139a221/transparent.png",
                        "featured": "https://media.fortniteapi.io/images/8854b67f98652e27fcf191d23139a221/full_featured.png",
                        "background": "https://media.fortniteapi.io/images/cosmetics/8854b67f98652e27fcf191d23139a221/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/8854b67f98652e27fcf191d23139a221/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/8854b67f98652e27fcf191d23139a221/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.Pickaxe.OneHanded",
                        "Cosmetics.Filter.Season.28",
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.AssassinSuit"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                },
                {
                    "id": "Wrap_066_AssassinSuit02",
                    "type": {
                        "id": "wrap",
                        "name": "Обёртка"
                    },
                    "name": "Ассасин",
                    "description": "Выберите свой стиль.",
                    "rarity": {
                        "id": "Uncommon",
                        "name": "НЕОБЫЧНЫЙ"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/4d4a393200e3a02c12aebaf7c952921c/transparent.png",
                        "featured": "https://media.fortniteapi.io/images/4d4a393200e3a02c12aebaf7c952921c/full_featured.png",
                        "background": "https://media.fortniteapi.io/images/cosmetics/4d4a393200e3a02c12aebaf7c952921c/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/4d4a393200e3a02c12aebaf7c952921c/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/4d4a393200e3a02c12aebaf7c952921c/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.AssassinSuit",
                        "Cosmetics.Filter.Season.9"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                }
            ],
            "priority": -1,
            "section": {
                "id": "JohnWick.99",
                "name": "Джон Уик",
                "category": null,
                "landingPriority": 0,
                "metadata": null
            },
            "groupIndex": 0,
            "storeName": "BRWeeklyStorefront",
            "tileSize": "Size_2_x_1",
            "categories": []
        },
```

```json
"granted": [
                {
                    "id": "CID_416_Athena_Commando_M_AssassinSuit",
                    "type": {
                        "id": "outfit",
                        "name": "Экипировка"
                    },
                    "name": "Джон Уик",
                    "description": "Каждое действие имеет последствия.",
                    "rarity": {
                        "id": "Legendary",
                        "name": "ЛЕГЕНДАРНЫЙ"
                    },
                    "series": null,
                    "images": {
                        "icon": "https://media.fortniteapi.io/images/46c716ab2a39918a9825a2847455aaed/transparent.png",
                        "featured": null,
                        "background": "https://media.fortniteapi.io/images/cosmetics/46c716ab2a39918a9825a2847455aaed/v2/background.png",
                        "icon_background": "https://media.fortniteapi.io/images/cosmetics/46c716ab2a39918a9825a2847455aaed/v2/icon_background.png",
                        "full_background": "https://media.fortniteapi.io/images/cosmetics/46c716ab2a39918a9825a2847455aaed/v2/info.ru.png"
                    },
                    "juno": {
                        "icon": null
                    },
                    "beans": {
                        "icon": null
                    },
                    "video": null,
                    "audio": null,
                    "gameplayTags": [
                        "Cosmetics.UserFacingFlags.HasVariants",
                        "Cosmetics.Source.ItemShop",
                        "Cosmetics.Set.AssassinSuit",
                        "Cosmetics.Filter.Season.9",
                        "SoundLibrary.ID.StepType.ShoesDress",
                        "SoundLibrary.ID.ClothingType.Generic",
                        "SoundLibrary.ID.HandType.Bare",
                        "Cosmetics.FrontEndPose.DontCrossArms"
                    ],
                    "set": {
                        "id": "AssassinSuit",
                        "name": "Джон Уик",
                        "partOf": "Входит в набор «Джон Уик»."
                    }
                }
```                