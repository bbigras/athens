# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0-beta.1](https://github.com/athensresearch/athens/compare/v2.0.0-beta.1...v2.0.0-beta.1) (2021-11-25)


### Bug Fixes

* run health check on client as well ([9161df0](https://github.com/athensresearch/athens/commit/9161df0814b5373452d285addfea881cc72f79cd))


### Documentation

* updates for 2.0.0-beta launch ([#1868](https://github.com/athensresearch/athens/issues/1868)) ([87b1e82](https://github.com/athensresearch/athens/commit/87b1e82df539ccf1c756481b67b36f273d5ca243))

## [1.0.0-alpha.rtc.46](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.45...v1.0.0-alpha.rtc.46) (2021-11-21)


### Bug Fixes

* this docker images was to skinny ([a209a28](https://github.com/athensresearch/athens/commit/a209a28c3e0a091a70e1ac18f7cb0c39b0fbc13e))

## [1.0.0-alpha.rtc.45](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.44...v1.0.0-alpha.rtc.45) (2021-11-21)


* added comment on why we need QEMU. ([a742df4](https://github.com/athensresearch/athens/commit/a742df4c691a04d04f8987b16745c55db495f6bb))
* linux-arm64 target supported and smaller images ([ccb51a7](https://github.com/athensresearch/athens/commit/ccb51a7b6e1a99665e741d8869fb415c05b55c57))

## [1.0.0-alpha.rtc.44](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.43...v1.0.0-alpha.rtc.44) (2021-11-19)


### Features

* handle errors and reconnect on add-event! ([e582c70](https://github.com/athensresearch/athens/commit/e582c70688e5c3fa01df9d445fb979c9d9214d3a))


### Bug Fixes

* don't print whole remote-db config ([25a5cd2](https://github.com/athensresearch/athens/commit/25a5cd294526b0bbb4f9274cf414091861aff4ec))
* save event to log inside the same lock as db transaction ([746a2ae](https://github.com/athensresearch/athens/commit/746a2ae945014cee6050d7b82aebfb58f3e1d60d))
* timeout on health check ([c1bc1f4](https://github.com/athensresearch/athens/commit/c1bc1f4ce06a555340d03f358f0f4ec2b9bebc60))
* use new fluree config in defrecord ([9dc5796](https://github.com/athensresearch/athens/commit/9dc57961d63628bba4a764acfbc8d07552eebf37))


* add fluree dev script ([f370c44](https://github.com/athensresearch/athens/commit/f370c44b436a5257ce301d822b816c44ddd3d023))

## [1.0.0-alpha.rtc.43](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.42...v1.0.0-alpha.rtc.43) (2021-11-18)

## [1.0.0-alpha.rtc.42](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.41...v1.0.0-alpha.rtc.42) (2021-11-18)


### Bug Fixes

* re-enable copy paste ([5936131](https://github.com/athensresearch/athens/commit/5936131bd40531cbeeab37cd899bf50722b20495))

## [1.0.0-alpha.rtc.41](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.40...v1.0.0-alpha.rtc.41) (2021-11-18)


### Performance

* don't reset conn if they are the same ([01b9b03](https://github.com/athensresearch/athens/commit/01b9b03e65695acfb28c3056111dc3911b2b073b))

## [1.0.0](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.38...v1.0.0) (2021-11-12)


* disallow auto-update to pre-release versions ([af82684](https://github.com/athensresearch/athens/commit/af826845364be2d8cf05618cc06e6fdd86f0e634))
* remove in-app update setting ([3ed9ee1](https://github.com/athensresearch/athens/commit/3ed9ee1a940209a40d5cc865a6809e8c721c98f0)), closes [/github.com/athensresearch/athens/pull/1803#discussion_r745655213](https://github.com/athensresearch//github.com/athensresearch/athens/pull/1803/issues/discussion_r745655213)

## [1.0.0-alpha.rtc.40](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.39...v1.0.0-alpha.rtc.40) (2021-11-18)


### Features

* add icon example to button sotry ([85f3e3d](https://github.com/athensresearch/athens/commit/85f3e3d9e6457a780c715170ce71004ddaf0045d))
* fill out welcome components ([62919c8](https://github.com/athensresearch/athens/commit/62919c8a79653b3a7dcd7fe819fe121830ab6121))


### Bug Fixes

* :block/remove should change titles too ([71e6751](https://github.com/athensresearch/athens/commit/71e6751fd842aa923b1af45f1e3dd7e012671dc2))
* better logging. ([5fedd23](https://github.com/athensresearch/athens/commit/5fedd2363b6bcd61b837e8c2500b0c92be0a77b3))
* **dbicon:** proper margins for db icon in toolbar ([5b46e28](https://github.com/athensresearch/athens/commit/5b46e28f8658309dc3cc4ba4e297c2ed6fdb53e1))
* welcome buttons properly styled ([75f1f90](https://github.com/athensresearch/athens/commit/75f1f90ea2ef44b4281e680a1a1f61cd31dfd256))
* **welcome:** consistent language for database ([aac0798](https://github.com/athensresearch/athens/commit/aac0798e4adf21396dc9796a0d5ed215706e75af))


### Refactors

* **button:** reimplement button content spacing ([6f73fdc](https://github.com/athensresearch/athens/commit/6f73fdc2403bd3a5bd823bfddc4d3833dee842e6))
* remove semantic events support from server ([7e2ad7d](https://github.com/athensresearch/athens/commit/7e2ad7de07517e61b185cb0689e6b3bdb567cafb))


### Work in Progress

* cleaner logging ([759270a](https://github.com/athensresearch/athens/commit/759270a6537736f63c5c6ac42e088006415d3a39))
* logging cleanup round 1. ([e2cbdea](https://github.com/athensresearch/athens/commit/e2cbdeab023a4025524e5ae43a2320e3643d2f0a))
* things and stuff removed ([7c282e8](https://github.com/athensresearch/athens/commit/7c282e8f2c90f76d644a1e6d31ac57a5b72a9bb4))


* add source maps and pseudo names to electron build ([9bc5c26](https://github.com/athensresearch/athens/commit/9bc5c266950d3ebf989c5155250b0e22b5bb81fd))
* log size of memory-log when replaying. ([ac63e87](https://github.com/athensresearch/athens/commit/ac63e87cff0ef860a34b72b1cd6daef29c94d619))
* style happier ([ff728aa](https://github.com/athensresearch/athens/commit/ff728aafa5c681d9d29936c67c46f6ac853be594))
* yarn clean should remove all .js and .js.map, and be crossplatform ([067f64c](https://github.com/athensresearch/athens/commit/067f64c056af4742c58aa008b8dd8cd07410dcbb))

## [1.0.0-alpha.rtc.39](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.38...v1.0.0-alpha.rtc.39) (2021-11-16)


### Features

* **help-popup:** Add help popup with content. ([178eb09](https://github.com/athensresearch/athens/commit/178eb0954f15ad6a66ab7fa4c293d75017b70cad))
* **help-popup:** Add tooltip to help icon ([c3e1d0b](https://github.com/athensresearch/athens/commit/c3e1d0b5885466c77550e3739d8ce8f5b2f32bd4))
* **help-popup:** Comment out help links until we have ([fcc6c4c](https://github.com/athensresearch/athens/commit/fcc6c4cf416ffb491a5800c0a9edae9c1e0d609d))
* **help-popup:** Fix a few shortcuts ([c96ace5](https://github.com/athensresearch/athens/commit/c96ace58d50f46fa5eb0386d12c86c7edea0f3a9))
* **help-popup:** Fix border mismatches ([17b1f45](https://github.com/athensresearch/athens/commit/17b1f45cffcfa777b7b1d7b1e2880b9d7cbafe26))
* **help-popup:** Fix closing of modal using escape. ([1e6c8f8](https://github.com/athensresearch/athens/commit/1e6c8f8e41dcabffe1a08fab5830e813c44ec605))
* **help-popup:** Fix copy and remove  a shortcut that ([c706c89](https://github.com/athensresearch/athens/commit/c706c89fc4c9ba5761fb9ec44085f4a0a696d4dd))
* **help-popup:** Fix issue with scroll-bar and move ([5b27673](https://github.com/athensresearch/athens/commit/5b27673f207d2458cce81c7e57aa4299cb39a9af))
* **help-popup:** Fix scroll behaviour ([3f77421](https://github.com/athensresearch/athens/commit/3f774210affadf7b01a2ec8fb672708f1b4122bf))
* **help-popup:** Fix spacing ([6924941](https://github.com/athensresearch/athens/commit/6924941a5a41a90564b7c69f0226f6913325ddf4))
* **help-popup:** Remove "code block" from Help. ([55042ae](https://github.com/athensresearch/athens/commit/55042ae560a143a3bf7049cc03601644158619d0))
* notify user of page being removed from beneath. ([bbb0bd9](https://github.com/athensresearch/athens/commit/bbb0bd98f12fc301afe064ec497b15d2d3c9fea6))
* use athens protocol for initial events in local ([1d3ba34](https://github.com/athensresearch/athens/commit/1d3ba34029444b0fe5c5f9f2db4d74d5f9d55f0c))


### Bug Fixes

* all the warnings and errors in help POPUP ([be59fe2](https://github.com/athensresearch/athens/commit/be59fe26984e1573949805c5094649b71076af21))
* better current page title detection ([2c10096](https://github.com/athensresearch/athens/commit/2c1009612ccf3f9f28a5d492502d55a6b6f41f78))
* don't delete dbs from disk in db-picker ([0ce8eee](https://github.com/athensresearch/athens/commit/0ce8eee4c104b62745ee885a8cff282ad92d120a))
* editing/target should delegate to editing/uid ([179bc64](https://github.com/athensresearch/athens/commit/179bc64a9b38ae6264c1beca83fa03a3eb9a2a60))
* embeds show presence as well as the original block ([679c1e1](https://github.com/athensresearch/athens/commit/679c1e1cf13abdb0cfd44e386d571e6ebbfe4ee9))
* enable `shortcut/move` atomic op on server. ([33ab6b7](https://github.com/athensresearch/athens/commit/33ab6b7940a566d728fd9cf7cd4e6d73549846bf))
* go to default db after connection failure ([d503b28](https://github.com/athensresearch/athens/commit/d503b287f43daee6cc83040a7f40cc6676ee5a3f))
* group-title is now nested in a vector ([76d2b05](https://github.com/athensresearch/athens/commit/76d2b054b842d74eddc39c3f005e4d60af986b0a))
* health-check server before connecting to websocket ([8bd701c](https://github.com/athensresearch/athens/commit/8bd701cf999f220953623e67975af513432bf880))
* locally determine old string for do nothing check ([e996564](https://github.com/athensresearch/athens/commit/e996564a3f70b450420737e4a6957c06f2d5a163))
* remove block/order from IR ([ae50ec5](https://github.com/athensresearch/athens/commit/ae50ec5321387a49fce1f765efad59ecefec91dc))
* we this argument `page/title` not `name` anymore ([fabe834](https://github.com/athensresearch/athens/commit/fabe8349e3d57ebf7d608806d832a24e3464300e))


### Work in Progress

* help-popup ([ec3c304](https://github.com/athensresearch/athens/commit/ec3c30425225d8558d531cecedbb6d251ea1dbb3))


### Documentation

* add digitalocean instruction and better permissions instructions ([8f1a793](https://github.com/athensresearch/athens/commit/8f1a793e954c49c0cae2cb341b28ce2cc6e28f25))
* Fix links to Athens Research Blog ([#1666](https://github.com/athensresearch/athens/issues/1666)) ([f7fccce](https://github.com/athensresearch/athens/commit/f7fccce389eab664a3a815d1627b976ad2e5a7d0))


* auto update all builds except on v2 ([fa7d7c9](https://github.com/athensresearch/athens/commit/fa7d7c97d60442f0631ace1bae196f8c15f92949))
* style, lint, carve ([d686d5e](https://github.com/athensresearch/athens/commit/d686d5ead9e38f49eafe51bd2104dd27b326503e))


### Refactors

* reduce log noise on non-verbose settings ([9ddf93e](https://github.com/athensresearch/athens/commit/9ddf93e84812adf7f62238adb4557a78c2b03220))
* review athens protocol ([dd64548](https://github.com/athensresearch/athens/commit/dd6454891976dbfa7d7fba6dfdba68ab9629322f))
* review internal representation names ([909ad57](https://github.com/athensresearch/athens/commit/909ad57364872c892b59498a05f2b06838a7e310))
* style happy ([e8135ed](https://github.com/athensresearch/athens/commit/e8135ed111dc457a9b4712dae770d819b1fcb310))
* style happy. ([b0cf925](https://github.com/athensresearch/athens/commit/b0cf925037abfe272504b43120cef3c60623e319))
* use button tooltip instead ([a2c36b7](https://github.com/athensresearch/athens/commit/a2c36b776a3fbd11fcee19623a3d9f8902defcd0))

## [1.0.0-alpha.rtc.38](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.37...v1.0.0-alpha.rtc.38) (2021-11-11)

## [1.0.0-alpha.rtc.37](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.36...v1.0.0-alpha.rtc.37) (2021-11-11)

## [1.0.0-alpha.rtc.36](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.35...v1.0.0-alpha.rtc.36) (2021-11-11)


### Bug Fixes

* shortcut op is new, not add ([13ccb04](https://github.com/athensresearch/athens/commit/13ccb042b47609d007b4c73df0d26c575cc67e47))

## [1.0.0-alpha.rtc.35](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.34...v1.0.0-alpha.rtc.35) (2021-11-11)


### Bug Fixes

* re-enable `:page/merge` ([a5a3b76](https://github.com/athensresearch/athens/commit/a5a3b76fd9d8d18ce63710ea712f03eb89a25dc9))

## [1.0.0-alpha.rtc.34](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.33...v1.0.0-alpha.rtc.34) (2021-11-11)


### Features

* `:page/delete` is atomic. ([1b00805](https://github.com/athensresearch/athens/commit/1b00805022eb5e4ad71c5ea6af07762fec7af460))
* `:page/merge` is atomic, so atomic. ([8f09340](https://github.com/athensresearch/athens/commit/8f09340214633f48f8e090991e65f6324219e157))
* add schema for shortcut atomic operations ([95d8d40](https://github.com/athensresearch/athens/commit/95d8d40f3e04601694b912a719ea82fee7e565d1))
* atomic `:page/rename` ([1a41e07](https://github.com/athensresearch/athens/commit/1a41e072819c1d8a83d45da5cc0692a6431a8366))


### Bug Fixes

* `:block/indent` positioning ([13d7f20](https://github.com/athensresearch/athens/commit/13d7f2087caa20beb9efb18edbb9eaa5a5fa4def))
* `:page/merge` throwing exceptions in `orderkeeper` no more. ([bf82419](https://github.com/athensresearch/athens/commit/bf82419731e3fecfed90b07e9e0a3b5e722b96f5))
* enable atomic `:page/rename` on protocol. ([1cb5a0f](https://github.com/athensresearch/athens/commit/1cb5a0f6bd2c4de43ba9f1818e47c7bca3b6e6df))
* make `:page/remove` idempotent. ([e67806b](https://github.com/athensresearch/athens/commit/e67806b7da51450375912ee21304a7e21a504d34))
* these tests should not expect exceptions anymore. ([a123490](https://github.com/athensresearch/athens/commit/a123490d1ca78cb78643edea5399add467b8a5ee))


### Refactors

* use name instead of title to identify pages in protocol ([9bc0e95](https://github.com/athensresearch/athens/commit/9bc0e95a425fc027fa31bb59640ff5babdb8f3ed))
* use startsWith boolean output as string ([c7cb73e](https://github.com/athensresearch/athens/commit/c7cb73eafe9704e659a9fdebe2dea0c26b0b7dc4))


* gh pages, auto-updates only for v1.* ([f07ea50](https://github.com/athensresearch/athens/commit/f07ea503f89febb57180d6964adb77ff56b13d7b))
* remove in-app update setting ([bdd15a8](https://github.com/athensresearch/athens/commit/bdd15a85e5eebf50f2221ab8c28ba0d747179d70)), closes [/github.com/athensresearch/athens/pull/1803#discussion_r745655213](https://github.com/athensresearch//github.com/athensresearch/athens/pull/1803/issues/discussion_r745655213)
* use if condition on composite action ([4d708e5](https://github.com/athensresearch/athens/commit/4d708e53f05d72cb01efd29ac9d5a2d9496913aa))

## [1.0.0-alpha.rtc.33](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.32...v1.0.0-alpha.rtc.33) (2021-11-08)


### Bug Fixes

* page navigation by title including nested cases. ([7e37201](https://github.com/athensresearch/athens/commit/7e3720102b1aa016faf73fd48d08a2343415fa60))
* use right bindings in :block/save event ([e301070](https://github.com/athensresearch/athens/commit/e301070ba0e956cf7a0e8659b7839eb75c82d1e4))


### Refactors

* remove unused require. ([76a9db6](https://github.com/athensresearch/athens/commit/76a9db686885bffdeaf5deefd94a9b7ce496b54f))

## [1.0.0-alpha.rtc.32](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.31...v1.0.0-alpha.rtc.32) (2021-11-08)


### Bug Fixes

* cleaner `page/page-by-title` ([a446a58](https://github.com/athensresearch/athens/commit/a446a5873c69efc7b29b9d204e43497340c050c0))
* don't dispatch nil, reframe does not accept it. ([72a8272](https://github.com/athensresearch/athens/commit/72a8272d2faa0dbe3f6334b943e3168b8fa63479))
* don't infinite loop during `:block/remove` ([e9b5180](https://github.com/athensresearch/athens/commit/e9b518098fcfff146fa0b31d3e34af3447168db0))
* fix wrong refactor ([5dfa574](https://github.com/athensresearch/athens/commit/5dfa5744de9d543d89a836b74b2f25f5be489d81))
* make nested page links work again. ([6e1f0e1](https://github.com/athensresearch/athens/commit/6e1f0e182e56d77a0252e003b2ac57a6717e9fc8))
* style/carve happy ([aa54c78](https://github.com/athensresearch/athens/commit/aa54c78534dd42bc591b1694de5cebc83c9df0b0))
* update own presence optimistically ([94ab5fb](https://github.com/athensresearch/athens/commit/94ab5fb4f1d8670a80b522555e017161fbfe73db))
* use compat-position for child and bump up ([308356c](https://github.com/athensresearch/athens/commit/308356c327728bc017e069881235387ad6460635))


### Enhancements

* more informant 404 page. ([880133d](https://github.com/athensresearch/athens/commit/880133dfb97d8b256f324227455bfe7263516b2e))
* navigate to pages by page title, not uid. ([66e3bf2](https://github.com/athensresearch/athens/commit/66e3bf2ba89013ec70805c5330575e0845710573))


* bump fluree ([d749d88](https://github.com/athensresearch/athens/commit/d749d88a427981a1c1792a61bd7671f1ef374966))
* separate arm64 ci build ([46da69c](https://github.com/athensresearch/athens/commit/46da69cab4255ba90a54089c5e3a420065c2ad2a))
* this would infinite loop, but isn't anymore. ([dc36450](https://github.com/athensresearch/athens/commit/dc36450832451019fe253c9451d477f5eea5671b))


### Refactors

* remove last-tx ([cd56dde](https://github.com/athensresearch/athens/commit/cd56dde8643e4c92b8535ee367c43db84d745db4))
* remove old-string from :block/save event ([9cea456](https://github.com/athensresearch/athens/commit/9cea456de456589aa36bb4df85954804678aedde))
* remove response-accepted schema ([e9267c9](https://github.com/athensresearch/athens/commit/e9267c9a9ba11aa6f3660e49075751bc04afcc05))

## [1.0.0-alpha.rtc.31](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.30...v1.0.0-alpha.rtc.31) (2021-11-04)


### Features

* log resolve-transact! total time ([bda3449](https://github.com/athensresearch/athens/commit/bda34494c1b9fa9a4dff99866b7fdfbe6207bbb6))
* remove page-uid, absolute block order use in protocol ([682c24d](https://github.com/athensresearch/athens/commit/682c24d717f19ebbf0b5a7a3c75b82f38af63aa7))


### Bug Fixes

* `:block/move` allowed to go places. ([bf2a17e](https://github.com/athensresearch/athens/commit/bf2a17efdaf2a4e85898a4b531273af4c443b2ea))
* block internal state `drag-target` compatible with block move relative positioning. ([e8832e9](https://github.com/athensresearch/athens/commit/e8832e9ac42b3d8f246fadbdf9c29d58d54ebd58))
* clear session list on reconnect ([114cdbc](https://github.com/athensresearch/athens/commit/114cdbcb941002b8d2c785d8867ef01528884003))
* improve compat-position warning ([a529de4](https://github.com/athensresearch/athens/commit/a529de4ab2efd5544369565f45a3e762ccb48220))
* improve logging for paste ([e337145](https://github.com/athensresearch/athens/commit/e33714548391060b67ce9b03b44fac89412fe83c))
* last block on an empty page should not be 1 ([2322689](https://github.com/athensresearch/athens/commit/2322689995c06a94a078a5b27cfdaf93de6bde68))
* position ref-uid is string ([6f3a898](https://github.com/athensresearch/athens/commit/6f3a898a60da16dc28e57ca277eaa424f2e03508))
* style ([6f71e7a](https://github.com/athensresearch/athens/commit/6f71e7a0ffee0abf5f09f78a650d5a1ca0879446))
* style fix. ([08dbf26](https://github.com/athensresearch/athens/commit/08dbf26d95475ca24ad298d2a8c3f8eaa486251a))


### Refactors

* faster page lookups ([74d7ecc](https://github.com/athensresearch/athens/commit/74d7ecc6745dfe546bb13c5b1e3dbf7b0ec6ca58))


* all ([9159f48](https://github.com/athensresearch/athens/commit/9159f489e11f95a60226093eeed38c3b41e93cf4))

## [1.0.0-alpha.rtc.30](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.29...v1.0.0-alpha.rtc.30) (2021-11-02)


### Bug Fixes

* :block/move to new parent. ([c9da42b](https://github.com/athensresearch/athens/commit/c9da42bf3a049aa8b98b9122002813caeb2108a0))
* take same-page/up into account when computing new-block-order ([ccac6dd](https://github.com/athensresearch/athens/commit/ccac6dd4918bda9b811d93d8e87e632238973874))


### Work in Progress

* 1st drop event moved to `:block/move` ([a0de566](https://github.com/athensresearch/athens/commit/a0de566607cf380b5f8c7564705e33ec85644556))
* cleanup of drop blocks ([ed8dc57](https://github.com/athensresearch/athens/commit/ed8dc57c2f882b53d5696432b15e2d44033b43e4))
* cleanup, x-mas came early this year. ([3366d4b](https://github.com/athensresearch/athens/commit/3366d4bd2b75356a38852c4c9e98ebd159bc5e0e))
* drop diff parent using `:block/move` ([a07ef16](https://github.com/athensresearch/athens/commit/a07ef168ee706e67b472b7439ec36ffe2a2e76b1))
* drop same parent using `:block/move` ([3ce1174](https://github.com/athensresearch/athens/commit/3ce1174397e76bc76703f5c62fc11295f2daf4ba))
* drop semantic events cleanup. ([1a22f1b](https://github.com/athensresearch/athens/commit/1a22f1b2dd2fb8ed53ce18d51734f827cecc8292))
* drop-multi different source parents cases using `:block/move`. ([de0c9a8](https://github.com/athensresearch/athens/commit/de0c9a833714cac0b68c384ef4100c408be31adf))
* drop-multi/same-all using block/move-chain ([bf310bc](https://github.com/athensresearch/athens/commit/bf310bc5260f64d7e758fee57dff22520834b988))
* failing tests. ([7472553](https://github.com/athensresearch/athens/commit/7472553867dc6a955cba882d65f960683bfe79df))
* introduced `:block/link` re-frame event to drop links to blocks. ([b600f4c](https://github.com/athensresearch/athens/commit/b600f4c12bbfa395a47137eb5298435d09387b47))
* last drop-multi migrated to `:block/move` ([4407534](https://github.com/athensresearch/athens/commit/4407534b5bfb955b6c4d4394c4acd1aadb4154d4))
* moving blocks like a boss, well not really just yet. ([b9a05ed](https://github.com/athensresearch/athens/commit/b9a05edc5f261988c8862a87f72afe5c9b196b7c))
* removed dead coda around drop events. ([60fcdbf](https://github.com/athensresearch/athens/commit/60fcdbf5f13291f700e1693856894e507bb7a0a5))
* simple drop multi using chain of `:block/move` ([7226bd5](https://github.com/athensresearch/athens/commit/7226bd52f40d6c1d53204bf5c9a3be28ccd25c4e))

## [1.0.0-alpha.rtc.29](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.28...v1.0.0-alpha.rtc.29) (2021-10-28)


### Bug Fixes

* bring local ledger up to date during ensure-ledger! ([a15ecea](https://github.com/athensresearch/athens/commit/a15ecea8e207d7b835d848de739870b97c798cde)), closes [/github.com/fluree/db/issues/126#issuecomment-953903963](https://github.com/athensresearch//github.com/fluree/db/issues/126/issues/issuecomment-953903963)
* don't include a link to Welcome in mini-datoms ([00ba659](https://github.com/athensresearch/athens/commit/00ba6594f49c2f800ec0242268b9b6c2fd91fdc3))
* load theme earlier in the boot sequence ([5297d0c](https://github.com/athensresearch/athens/commit/5297d0cec193db3e5beadaecda2a8b92f25fb9ff))
* use initial datoms, but without any page links ([e1e23d6](https://github.com/athensresearch/athens/commit/e1e23d6e3675489125c0d243e81efb85ae5c0a0e))
* workaround for fluree tx limit ([45b6877](https://github.com/athensresearch/athens/commit/45b6877554eff88a01db9334f6036f8b90e0989e))
* workaround query delay ([0ae6ca8](https://github.com/athensresearch/athens/commit/0ae6ca83fc9e56a0966c74463859582fa0ea20d0))


* don't build dmg zip ([92ca6b4](https://github.com/athensresearch/athens/commit/92ca6b41e604d5c038c247430f7270b69fb2c8ba))

## [1.0.0-alpha.rtc.28](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.27...v1.0.0-alpha.rtc.28) (2021-10-27)


### Features

* store user color between sessions ([994acf0](https://github.com/athensresearch/athens/commit/994acf0bb096e6feeb3930e4c52b8bdf4cfa4f48))


### Bug Fixes

* break shape-parent-query loop if there's no parent ([bc2d170](https://github.com/athensresearch/athens/commit/bc2d170f8d06e0050ca04e299bdb3c2407f808d8))
* fix inline presence, go to user page ([37a5507](https://github.com/athensresearch/athens/commit/37a550789b17a5c2d20b52a05fb541074e0447cc))
* throw on recreating page with different uid, mismatched daily page title/uid ([7cce9eb](https://github.com/athensresearch/athens/commit/7cce9eb7f952ae647b0757686ac57d7c00f8812b))
* use daily note uid for daily note title on page create ([e26b917](https://github.com/athensresearch/athens/commit/e26b91745c87b1ffa2ee67bad17f20c88b4ceb00))
* use daily notes uid for new pages on :block/save ([5fce285](https://github.com/athensresearch/athens/commit/5fce285eb05716fa2dbb60fb415edb222691d469))
* use resolve-transact! in all locations, mark :transact event for removal ([d11125b](https://github.com/athensresearch/athens/commit/d11125baf527e6770a112c9d939194dccc0cc307))


### Refactors

* move date utils into cljc ns ([615ae86](https://github.com/athensresearch/athens/commit/615ae86e2e4c1948f2ef5ab60dc91a516bdaa72d))
* use date-to-day to simplify logic ([6853a5c](https://github.com/athensresearch/athens/commit/6853a5c68e28718e176690ee497810063ee4a33e))


### Work in Progress

* cleaned requires. ([c171845](https://github.com/athensresearch/athens/commit/c171845f523388f1edf1db9edf88d5ed5f489848))
* fixing wrong resolution and fallout ([c7c156b](https://github.com/athensresearch/athens/commit/c7c156bf0bfc35cdbf41f98cc1933e63e08c9962))
* Marked locations to make new atomic transactions be possible. ([d2e4580](https://github.com/athensresearch/athens/commit/d2e4580034b9ddebf894d6a3edf99c2c0627792b))
* Moving to 1 transaction per each atomic graph op. ([51225fe](https://github.com/athensresearch/athens/commit/51225fe9dae733f5ac443ed215e0eefb78309753))


* add disabled test for missing block new ref ([e750d53](https://github.com/athensresearch/athens/commit/e750d53a51535317a5b6646b31de64e79ef38a95))
* add server:wipe script ([f87d458](https://github.com/athensresearch/athens/commit/f87d4581b4263f58f3759f60fe63d93052b6bc40))
* enable `:block/new` test that checks for existence of rel block. ([fe7b8a7](https://github.com/athensresearch/athens/commit/fe7b8a744bd992210f1b88c3c8874e1914863858))
* pin ua-parser-js to an uncompromised version ([2d18345](https://github.com/athensresearch/athens/commit/2d1834542a9ad6608d5612036d01ec92e8d2283b))
* style happy. ([a3c2163](https://github.com/athensresearch/athens/commit/a3c2163487373b2806de663d28244944db3a35e6))
* update v1-to-v2 test ([ee45e99](https://github.com/athensresearch/athens/commit/ee45e99d9d5c16c44dc8ae3c662088136f656846))

## [1.0.0-alpha.rtc.27](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.26...v1.0.0-alpha.rtc.27) (2021-10-21)


### Bug Fixes

* don't fire db events on navigated while still loading ([a8122b6](https://github.com/athensresearch/athens/commit/a8122b62f0d5d9fe86d738957ddb79641cad7593))
* let boot control loading status ([2957bca](https://github.com/athensresearch/athens/commit/2957bcae4b3a484e243655b47fd472c74292b144))
* remove selected db on connection failure ([ef025e4](https://github.com/athensresearch/athens/commit/ef025e4eb343c5b6b5f340122e5ca3c1cdf9f47f))
* use single exit point on reset-conn for async-flow ([b04a9b7](https://github.com/athensresearch/athens/commit/b04a9b75094aab7e2882795ca85796b284c3d22f))


### Refactors

* remove unused get-db events ([3f6fcc3](https://github.com/athensresearch/athens/commit/3f6fcc32bf49e39a22d6712befd180b1e1e36373))


* style, lint, carve ([a669ffc](https://github.com/athensresearch/athens/commit/a669ffcbd5e9e53da5aeb2a1a3e87069f0bb86a9))

## [1.0.0-alpha.rtc.26](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.25...v1.0.0-alpha.rtc.26) (2021-10-20)


### Documentation

* ADR for Atomic Graph Operations and Transacting. ([23022fb](https://github.com/athensresearch/athens/commit/23022fbe05f81e676f4e4edfc91046c1fb92e14e))


* update fluree ledger to 1.0 ([1db7a24](https://github.com/athensresearch/athens/commit/1db7a241a520bfd757b965060c19e0f19b0e4e2d))

## [1.0.0-alpha.rtc.25](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.24...v1.0.0-alpha.rtc.25) (2021-10-20)


### Features

* `:block/remove` delete also subtree ([9a82163](https://github.com/athensresearch/athens/commit/9a821631bb0003cb67b4316db74bd40252714b87))
* `:block/remove` taking care of block refs too. ([b343572](https://github.com/athensresearch/athens/commit/b343572766df6284293096202129609a8ad364a9))
* allow leaving even with unsynced changes ([31f107d](https://github.com/athensresearch/athens/commit/31f107d7a3771244ee994d9178e71c88c1eb024a))
* basic delete works on atomics ([3fb4036](https://github.com/athensresearch/athens/commit/3fb4036ef21c8b8129e29e9441b0c322cc9ed5e1))
* pass page title on to avatar/presence details ([240a9e7](https://github.com/athensresearch/athens/commit/240a9e7b2dccf89329201250aa06f62efdd47433))


### Bug Fixes

* disconnect rtc client when deleting db ([c9a6621](https://github.com/athensresearch/athens/commit/c9a6621f626fc0e6c0504a87f8759d6c499b6f56))
* don't move back cursor when there's no expansion ([98cfb24](https://github.com/athensresearch/athens/commit/98cfb24cd1bb2e95932b249282714748e2488b45))
* map user to person in inline presence ([f7fb663](https://github.com/athensresearch/athens/commit/f7fb66306c6c11cdaca90d864115c8ec57eda4ea))
* print uuid as string ([f38121a](https://github.com/athensresearch/athens/commit/f38121a6b68309f98cbea3927b824f7f660f0e22))
* rollback-tx-snapshot atomically ([bcb334b](https://github.com/athensresearch/athens/commit/bcb334bb3c4773d79b0840936a945b9227eb7d43))
* use db-picker instead of client connection to determine if db is remote ([29e8d5b](https://github.com/athensresearch/athens/commit/29e8d5b1e5f22e4686351050987bd85b7e00effa))
* use right key for block/uid on initial presence ([c140340](https://github.com/athensresearch/athens/commit/c140340ee85acf43036b486c6869ad95fb0b7a14))
* user editing log should be debug level ([1c0b775](https://github.com/athensresearch/athens/commit/1c0b7750b34878a960effdd041be0de82e0fe040))


* commit deps added by fluree to shadow-cljs builds ([d567fca](https://github.com/athensresearch/athens/commit/d567fcad3fbdd21f6bcb48e339cba99cd6ce317d))
* fix ([fe9df20](https://github.com/athensresearch/athens/commit/fe9df20871a645109e3cb2e81cbec97bed297eb2))
* re-enable cljs tests, except the one that needs full web build fix ([79da717](https://github.com/athensresearch/athens/commit/79da7177560250faca8aa165ae3a03493a9362ef))
* remove unused ns ([cef5bc7](https://github.com/athensresearch/athens/commit/cef5bc78e4bfdf370b575eac4ef9d44a84f30fe4))
* run more tests in cljs ([6a0b035](https://github.com/athensresearch/athens/commit/6a0b035cb911cfcf1890b1eca61564b9f09d5d25))
* style happy ([ea39d0e](https://github.com/athensresearch/athens/commit/ea39d0e211a6234645c743702ad75f86a627a687))
* style job should run style, not lint ([bdeae79](https://github.com/athensresearch/athens/commit/bdeae79f52e929669ff9ce3d4de72f20f316925e))
* these tests need to pass ([d0981c9](https://github.com/athensresearch/athens/commit/d0981c97950deac1f4e38415da98163bc938091e))
* use atomic `:block/remove` to remove blocks. ([9425330](https://github.com/athensresearch/athens/commit/9425330c366029b44cbeee9ff535ce34be7b72fa))
* user docker compose server settings as default ([5b9e3da](https://github.com/athensresearch/athens/commit/5b9e3da9ae34460081e5d36a92a1b8f4f10a5adf))

## [1.0.0-alpha.rtc.24](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.23...v1.0.0-alpha.rtc.24) (2021-10-14)


### Bug Fixes

* fetch all events on startup ([42e21d6](https://github.com/athensresearch/athens/commit/42e21d6344ec0f7394499766f314720e18ba6956))

## [1.0.0-alpha.rtc.23](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.22...v1.0.0-alpha.rtc.23) (2021-10-13)


* more generous docker health checks ([eb1eba3](https://github.com/athensresearch/athens/commit/eb1eba30640d444b588b5161ebc10c50c740d3a3))

## [1.0.0-alpha.rtc.22](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.21...v1.0.0-alpha.rtc.22) (2021-10-13)


### Bug Fixes

* use updated schema ns ([e27860d](https://github.com/athensresearch/athens/commit/e27860dd1f3596b01ff8e7d9e67eff19081f6095))


* add health checks to docker compose, fix fluree server address ([7fa21b2](https://github.com/athensresearch/athens/commit/7fa21b20ea24e6cb16b6879bb1b5e1982d881049))
* fixit ([79e9aa1](https://github.com/athensresearch/athens/commit/79e9aa1cbafafa6ae1514fd9d3a57e595acd141e))

## [1.0.0-alpha.rtc.21](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.20...v1.0.0-alpha.rtc.21) (2021-10-13)


* increase max memory for athens server ([44e9672](https://github.com/athensresearch/athens/commit/44e9672004561fa5c10fb493b453ba644ad23ba3))

## [1.0.0-alpha.rtc.20](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.19...v1.0.0-alpha.rtc.20) (2021-10-13)


### Bug Fixes

* include default.config.edn in uberjar, only use config.edn in dev ([8a5ef89](https://github.com/athensresearch/athens/commit/8a5ef89208144a3620949874b1e68ed29fbabf05))
* remove cljstyle workaround ([fce927e](https://github.com/athensresearch/athens/commit/fce927e99d2591c497352a83351c427510ecbdce))

## [1.0.0-alpha.rtc.19](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.18...v1.0.0-alpha.rtc.19) (2021-10-13)


### Features

* use fluree as an event-log with a datascript db ([e558ba0](https://github.com/athensresearch/athens/commit/e558ba044acab4134be16e31fa9d25d412e496f0))


### Bug Fixes

* datascript comp transacts using web transact fn ([d1e00f3](https://github.com/athensresearch/athens/commit/d1e00f3bccefb65e2969284c4b1c0f2550dfd455))


* don't use prefix for docker services ([6de4ff8](https://github.com/athensresearch/athens/commit/6de4ff87016ed18eaad856bf111c955188196c5c))
* include test in default source paths ([8cf2012](https://github.com/athensresearch/athens/commit/8cf2012f2510f3263839441bfe2ea3cd71ca83a2))
* use immutable tag for fluree docker ref ([6013ae0](https://github.com/athensresearch/athens/commit/6013ae0e972a490f4f75b06420ebaa753f0889ea))

## [1.0.0-alpha.rtc.18](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.17...v1.0.0-alpha.rtc.18) (2021-10-12)


### Features

* `:page/new` can be composite op. ([d5635a7](https://github.com/athensresearch/athens/commit/d5635a7b1195b414b803420c9bd4b1eece22da35))
* reject optimistically transacted events ([fc7b4be](https://github.com/athensresearch/athens/commit/fc7b4be7356891592dfc4f500c916529e67eb823))


### Bug Fixes

* :git/sha issue and ordered was released. ([e6237d8](https://github.com/athensresearch/athens/commit/e6237d8b56daf13365624d901f5f38eabec66fc8))
* cljs log converts args to js ([7d2b29f](https://github.com/athensresearch/athens/commit/7d2b29fef5490e87c456c2c764a6e70e5705bff8))
* update carve to fix report bug ([fb36b0c](https://github.com/athensresearch/athens/commit/fb36b0cb2c9c951d1396b0d2b1f71f31aea98f28))


### Refactors

* remove unused old event tracking subs ([118e61d](https://github.com/athensresearch/athens/commit/118e61d94a9eb2c135e9ab7e6d8e2119849f61d0))
* yarn server runs server, yarn server:uberjar builds uberjar ([1a44b48](https://github.com/athensresearch/athens/commit/1a44b4836bf67cb2e28f4bfb8727520bec7a9423))


* concurrency compatible `:block/new-v2` op with tests. ([caabff8](https://github.com/athensresearch/athens/commit/caabff840c2c0b43cac26e979424f300240352f9))
* move from lein to clj+deps.edn ([af01e2a](https://github.com/athensresearch/athens/commit/af01e2a0d0921ac740d19b7583ff904ded2f7bc3))

## [1.0.0-alpha.rtc.17](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.16...v1.0.0-alpha.rtc.17) (2021-10-07)


* cache built app ([42032f0](https://github.com/athensresearch/athens/commit/42032f0ae214729cfb276e80bab992312e459e62))

## [1.0.0-alpha.rtc.16](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.15...v1.0.0-alpha.rtc.16) (2021-10-07)


### Features

* add basic eventsync impl ([8e986d8](https://github.com/athensresearch/athens/commit/8e986d8d80d00b0dbf65888aaf9091f59d6e5915))
* add description of EventSync ([46ffb69](https://github.com/athensresearch/athens/commit/46ffb6902a33f586c74c00bdcc52fee2707e779a))
* block-uid nil eater part 2. ([219eea0](https://github.com/athensresearch/athens/commit/219eea0377ceae6e3b0375f4c8be3183681abd7b))
* DB Consistency check/fix on startup and some logging. ([54de653](https://github.com/athensresearch/athens/commit/54de6537c5131c682d4fc6387d0d91f203b7b320))
* first event-sync implementation ([8ab0f48](https://github.com/athensresearch/athens/commit/8ab0f483c21bf1302fa01db26ce457fb3b5ee178))
* **notification:** block in notification component ([cc14bb9](https://github.com/athensresearch/athens/commit/cc14bb90987b081905d9c3c105bb0a3607abaa54))
* **notifications:** add notifications component ([f22a957](https://github.com/athensresearch/athens/commit/f22a95701493c619ccaacbd59eff8fc2139be518))
* process operations optimistically in RTC ([f1adb2b](https://github.com/athensresearch/athens/commit/f1adb2b6058b16a6f2602be4f7e3a2f7089cd1a0))
* show db sync state as events left to sync ([a546e20](https://github.com/athensresearch/athens/commit/a546e20f2120d05b39e83d327bce868dd4cb341e))
* **toast:** basic toast fn in place ([6bf841a](https://github.com/athensresearch/athens/commit/6bf841aee5a91e1e93884c3923e893c67daa26e2))
* Uniform logging for CLJ & CLJS. ([497e237](https://github.com/athensresearch/athens/commit/497e237c74d2e4b8f04efc99717fc8e4f40a86ee))
* use electron-window-state to persist window size and position ([30f3522](https://github.com/athensresearch/athens/commit/30f3522b5d49085cfea1ce096e266dabf7ae310c))


### Bug Fixes

* add missing folder to repo ([d57ffb9](https://github.com/athensresearch/athens/commit/d57ffb9173b63b8afcbdd6fc2755cc3c15b878d9))
* **button:** properly unrequire props ([f5e7fca](https://github.com/athensresearch/athens/commit/f5e7fcad13d445fe1eb5d5fb1b5a0f4b0a93b2ce))
* check selected-db, not client state for write-db ([ac95df8](https://github.com/athensresearch/athens/commit/ac95df83cdcde6583d80823bd1e990e1b42ddaab))
* **db:** use correct default zoom level ([6896d5a](https://github.com/athensresearch/athens/commit/6896d5a4bf3081b5ea9aac2a0aac4d67df95f40c))
* fix keyword typo ([09af693](https://github.com/athensresearch/athens/commit/09af6931fc6e5f0f13d10fc9549dce57f1eb2336))
* log but don't error out on stale strings ([c9be401](https://github.com/athensresearch/athens/commit/c9be4013716c005996dcfdd73afc9cfcb3acbf98))
* log correct `event-id`. ([8f5240c](https://github.com/athensresearch/athens/commit/8f5240c8b3a0d58a7a2be7b157b3976a0cdb6d7f))
* match block uid correctly ([032199e](https://github.com/athensresearch/athens/commit/032199e9aac7b4aecfcf764610646ea48ea008cf))
* **presence:** presence menu appears over toolbar ([d290f5c](https://github.com/athensresearch/athens/commit/d290f5c344a1bbae5545241b9b2d58dc61a62934))
* remove unused ns require ([2a65a4f](https://github.com/athensresearch/athens/commit/2a65a4fe6070320feb39b77ebe58f629c1ab2cd8))
* removed `:remote/db-id` as we ain't using it no mo. ([736c968](https://github.com/athensresearch/athens/commit/736c96805244317bc31810ea87cfbcebcc863a82))
* removed unused test ([b40d29b](https://github.com/athensresearch/athens/commit/b40d29bf73695eeed7a851b91e2daa02e31ecfc0))
* small fixes from the demo meeting ([7fa4ece](https://github.com/athensresearch/athens/commit/7fa4ece1c1e85ba4e4d420ebca199eeaca5c7bc6))
* sync on empty memory log from post-op db ([f6e73c5](https://github.com/athensresearch/athens/commit/f6e73c50b624128db31bde0f53845d6aafc80879))
* this is not how one transacts. ([d6564a4](https://github.com/athensresearch/athens/commit/d6564a41c6abe282e90065d59f44a556f58b5c8b))
* **toolbar:** unzoom toolbar ([7eef057](https://github.com/athensresearch/athens/commit/7eef05744c560dd8d08100e530e3d1516c72efa3))
* transact needs vector. ([f177902](https://github.com/athensresearch/athens/commit/f177902513faf7bd90fffb157fa2922e14fb642d))
* typo ([16db7d5](https://github.com/athensresearch/athens/commit/16db7d5136fad89a1ef32a536512d86846234d60))
* use right key for page lookup ([911d78e](https://github.com/athensresearch/athens/commit/911d78e8421b30d7b1e258d7a3ccfb9f6a0dbf4e))
* we actually don't need `:db/id` on `:block/children` ([f1cf26d](https://github.com/athensresearch/athens/commit/f1cf26d60c08e32c9649372e0c89b333659706a7))


* `dev/datahike-conn` useful also outside `dev` ns. ([b26173b](https://github.com/athensresearch/athens/commit/b26173bef6e62b1a887c94f667acb22fa255e7e2))
* `remote.cljs` also uses `common.log`. ([6760532](https://github.com/athensresearch/athens/commit/6760532794df357b0336c37339d9bd37467eea74))
* actual memory requirements. ([bdd6ad8](https://github.com/athensresearch/athens/commit/bdd6ad8449f2eb6d896c220f3337cdf7770bce9b))
* add tests for event-sync ([868bdf2](https://github.com/athensresearch/athens/commit/868bdf23cf7c77e2f231d860e037c643c6bb67e0))
* all the checks. ([573edb0](https://github.com/athensresearch/athens/commit/573edb0f2cb87805706c96917329e43cc8adb7e7))
* by default use same path for DB as dockerized config. ([4ef2119](https://github.com/athensresearch/athens/commit/4ef21196da078e90ac5e86f10bd22a941267559f))
* commented out broken tests. ([c1f08df](https://github.com/athensresearch/athens/commit/c1f08dfef1ed7f1c2b98cc7c25e0093713b00f67))
* fixit ([e6828a2](https://github.com/athensresearch/athens/commit/e6828a2df06f864822bc508778e5c7efde89d4bc))
* fixit ([c225a48](https://github.com/athensresearch/athens/commit/c225a48803f428c9e6b05e5570e197507457a929))
* logging cleanup. ([bff79fc](https://github.com/athensresearch/athens/commit/bff79fcb0145a62702fd38386552ab1df497be94))
* pprint failed transactions. ([0c3343f](https://github.com/athensresearch/athens/commit/0c3343fffe3f4ed391a5fe69a067253e935a4cf9))
* remove unneeded commas ([aaa007c](https://github.com/athensresearch/athens/commit/aaa007cfb9fdb8b1e91f21411c042bb0e4b0f97c))
* talk `:block/uid` to me. ([25587ae](https://github.com/athensresearch/athens/commit/25587aeb972bcbd4c09ed1ccdf1411d26a4fa6da))
* use deps.edn with lein ([df9528f](https://github.com/athensresearch/athens/commit/df9528f14e19a396a8237c25712967e790536312))
* use sha for org.flatland/ordered ([27cebb0](https://github.com/athensresearch/athens/commit/27cebb00eb0a4e9e3c6b00928b359d1d2c424da0))


### Refactors

* follow map-first seq-last clojure convention ([0d1b8a2](https://github.com/athensresearch/athens/commit/0d1b8a24f69dd0eb6f697ce0fe44e3fb0bdae0a6))
* **notification:** simplify buttons ([d07a20a](https://github.com/athensresearch/athens/commit/d07a20a53785d0dfadf1c5ba52611a3e29b76369))
* **notification:** simplify buttons ([25ccd84](https://github.com/athensresearch/athens/commit/25ccd843774fe2909b2bde3f0784b91bb8df5e0b))
* **presence:** move layout containment to html ([d532cd9](https://github.com/athensresearch/athens/commit/d532cd98cec7081fc56f7a99d593f8060e6aa2b1))
* use log/debug in optimistic events ([8856cc2](https://github.com/athensresearch/athens/commit/8856cc27475e9571bd670f0cc6f43c78cbe54a69))

## [1.0.0-beta.98](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.8...v1.0.0-beta.98) (2021-09-27)

## [1.0.0-beta.97](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.6...v1.0.0-beta.97) (2021-09-21)


### Bug Fixes

* Correct JS constructor name. ([bfbc940](https://github.com/athensresearch/athens/commit/bfbc94020a16793be7cd6f65ae78a08ab2f2abe3))
* Just errors and crashes sent to Sentry. ([7c48179](https://github.com/athensresearch/athens/commit/7c48179ec67d59104f3823a7f1d4f1df36845c78))
* Sort linked references by date descending. ([95dbd60](https://github.com/athensresearch/athens/commit/95dbd60dac93ce524c5fe64ee6b2336ef8ce2940))

## [1.0.0-beta.96](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.2...v1.0.0-beta.96) (2021-09-02)


### Bug Fixes

* Selection behaviour fixed (ported to main). ([2cc7877](https://github.com/athensresearch/athens/commit/2cc787759ada642f6faccc7c8ccace75b99348ff))

## [1.0.0-beta.93](https://github.com/athensresearch/athens/compare/v1.0.0-beta.92...v1.0.0-beta.93) (2021-08-04)

## [1.0.0-alpha.rtc.15](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.14...v1.0.0-alpha.rtc.15) (2021-09-30)


### Features

* **blocks:** use ts block anchor ([a9733f2](https://github.com/athensresearch/athens/commit/a9733f21aac700b6f64a3d3215bdc3de76d4dd66))
* **button:** buttons have styled focus ring ([6f07ad3](https://github.com/athensresearch/athens/commit/6f07ad3905a53783e13d5ad27df76b66ad39d69d))


### Bug Fixes

* **anchor:** can drag blocks again ([19106a9](https://github.com/athensresearch/athens/commit/19106a94bcb5d2b36582390ef13d7b3fa5804718))
* don't send editing nil events ([49259cf](https://github.com/athensresearch/athens/commit/49259cf6206a43d0f50c7442b5c5867c1c731b63))
* presence for home page should show all users on daily notes ([811eba2](https://github.com/athensresearch/athens/commit/811eba207cf1c0f9770201e1e89196b402e5cd2a))
* **toolbar:** rendering database menu ([b54c470](https://github.com/athensresearch/athens/commit/b54c47078ea384c54e854b7329daefb2d92391b8))


### Refactors

* **blocks:** use ts toggle and bullet ([82b617e](https://github.com/athensresearch/athens/commit/82b617ed49734963f119b43f4218dd444dd0455b))
* **block:** use ts debug details ([ca0eb2a](https://github.com/athensresearch/athens/commit/ca0eb2a8bb535ad4f6daaeaf930caafd15fd8fd0))
* **block:** use ts debug details ([531f096](https://github.com/athensresearch/athens/commit/531f0962ab587930c6a45be757e3848f0ad7d668))
* **toolbar:** use ts toolbar ([b81f765](https://github.com/athensresearch/athens/commit/b81f765869619f607c1f012e9d69861056e84b46))


* add newline ([0d7475b](https://github.com/athensresearch/athens/commit/0d7475b01b66f4f36ac17ce30b26692042856139))
* ignore temp unused fn ([abd84e4](https://github.com/athensresearch/athens/commit/abd84e48e71dce3810249cdfa3552f5a6fbecd7a))
* lint ([349415c](https://github.com/athensresearch/athens/commit/349415c98c236c7fa4eda4f2f28fb00235e796b1))
* lint ([a0048e2](https://github.com/athensresearch/athens/commit/a0048e2bad3e5cce82ad2bffa450a21404534416))
* minor fixes and cleanup ([d58e960](https://github.com/athensresearch/athens/commit/d58e9606b73add52ddd0f89c3c5cd5e0ab0f4191))
* minor fixes and cleanup ([c089e72](https://github.com/athensresearch/athens/commit/c089e7222140b040af8abd11c3cb76f5b53334c3))
* remove unused import ([f5ee071](https://github.com/athensresearch/athens/commit/f5ee07125899dcf0b3ded2a95205c262553c5ea5))

## [1.0.0-alpha.rtc.14](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.13...v1.0.0-alpha.rtc.14) (2021-09-30)


* increase yarn timeout ([1878c50](https://github.com/athensresearch/athens/commit/1878c50a05aa17e785dd768ef61033423dd7316f))

## [1.0.0-alpha.rtc.13](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.12...v1.0.0-alpha.rtc.13) (2021-09-30)


### Bug Fixes

* **presence:** clean up misc styling issues ([80121a3](https://github.com/athensresearch/athens/commit/80121a3a567a71c7cb2dfd15c267e87681a1426d))


* add missing iconoir-dep ([918ab53](https://github.com/athensresearch/athens/commit/918ab53893847bf96e1b972974d9906850c77ab3))

## [1.0.0-alpha.rtc.12](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.11...v1.0.0-alpha.rtc.12) (2021-09-30)


### Bug Fixes

* always have username and color for people ([a97d003](https://github.com/athensresearch/athens/commit/a97d0035402061f10e3a7a90d86370844be016b8))
* don't release docker-compose that attempts to build images ([1a313e2](https://github.com/athensresearch/athens/commit/1a313e219f1da8f8c3f544b33aa9c7e92269b6e4))


* always store athens data by the compose file ([420a7c7](https://github.com/athensresearch/athens/commit/420a7c79024d40140b667c344d17620efbe04dc8))
* don't build server jar on release-electron ([d3daf2a](https://github.com/athensresearch/athens/commit/d3daf2a8cd53be0c53bcf21ad20dba7010ac42d9))
* use data env var for data, logs path ([13a0165](https://github.com/athensresearch/athens/commit/13a016519144295963be2dc41f317e923a3b8b38))

## [1.0.0-alpha.rtc.11](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.10...v1.0.0-alpha.rtc.11) (2021-09-28)


### Bug Fixes

* always provide a color for current user ([f49c24d](https://github.com/athensresearch/athens/commit/f49c24d6e77ab6269459389fda3c21a164d2fb61))
* less logging on backend and more testing. ([84a3de5](https://github.com/athensresearch/athens/commit/84a3de59959c29b1114dca6eabdad2a5e4ec8942))


### Refactors

* **spinner:** use ts spinner ([80b8a87](https://github.com/athensresearch/athens/commit/80b8a872de6501358c151e18a92314c4f76cfc5d))
* **toggle:** use ts toggle ([794b004](https://github.com/athensresearch/athens/commit/794b004e8c8f8d37a0a9d5a216bcb7037cd8c119))


* cljstyle happy ([efbe155](https://github.com/athensresearch/athens/commit/efbe1559ff074353666eb4114fb765e50d7dc701))
* don't limit docker release to main ([086b9a4](https://github.com/athensresearch/athens/commit/086b9a491c1f3de48aa73045da33c54ed326d8ba))
* factor out env setup ([1c2b009](https://github.com/athensresearch/athens/commit/1c2b0097a4db2b494fd46735fb091794dffd9e8c))
* fix style issues ([d763bde](https://github.com/athensresearch/athens/commit/d763bdeff10676359ad0f44a683a29e7e44c65c0))
* fix style issues ([ead68b3](https://github.com/athensresearch/athens/commit/ead68b370e2ab134c1149ad4e9a17fafa5bbccc6))
* fix style issues ([60e2ccd](https://github.com/athensresearch/athens/commit/60e2ccdae45ec09552a4615a076b411ce7471f78))
* release athens,nginx docker image and docker compose ([2ed4f71](https://github.com/athensresearch/athens/commit/2ed4f71fe391b2dd7d62bac61a9e12f3db90ac5f))
* rename release jobs ([8c13d2a](https://github.com/athensresearch/athens/commit/8c13d2ab097741ba0069074110b2e2c87092f76e))
* reuse checkout via anchor ([040836f](https://github.com/athensresearch/athens/commit/040836f230a86e0e7de791f4d0c4613c1ed1cf11))
* use ubuntu-latest throughout ([4c070f7](https://github.com/athensresearch/athens/commit/4c070f7ffe4669470d982e0191f6a4ce77d55f7c))

## [1.0.0-alpha.rtc.10](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.9...v1.0.0-alpha.rtc.10) (2021-09-27)


### Features

* Orderkeeper to keep all your `:block/order` ordered. ([7ac1844](https://github.com/athensresearch/athens/commit/7ac18448b02a600f7dd1ada16277c58209d0cfca))

* Don't log TXs and typo. ([915a818](https://github.com/athensresearch/athens/commit/915a818dd70f0fbf52a4212501af36313348320a))


* carve happy. ([0dba4d4](https://github.com/athensresearch/athens/commit/0dba4d4f12923ee308af2d4a6e90b710cc5bf314))

## [1.0.0-alpha.rtc.9](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.8...v1.0.0-alpha.rtc.9) (2021-09-27)


### Features

* **dialog:** add new dialog component ([15ced38](https://github.com/athensresearch/athens/commit/15ced387e9047568793464131c2c61c9925b108c))



### Bug Fixes

* always focus first child, even on daily notes ([c7b1a90](https://github.com/athensresearch/athens/commit/c7b1a90ad5028b592c2f8c091249c2235b6bc639)), closes [#1669](https://github.com/athensresearch/athens/issues/1669)
* **avatar:** stack accepts style props ([969eb22](https://github.com/athensresearch/athens/commit/969eb22a5880b5fbca3aab114f1b65914764972c))
* pass username, not channel, to goodbye-handler ([a70489c](https://github.com/athensresearch/athens/commit/a70489c91cae41a2d3c11f909d99afa0cde4f47d))
* **presence:** use consistent avatar spacing ([0ad1b16](https://github.com/athensresearch/athens/commit/0ad1b16d80bb86a2e8ccd59f4c8dbc569ba964cc))
* remove unused component ([2a9c489](https://github.com/athensresearch/athens/commit/2a9c48945e8b2b6eabd9b3d506712f8e55e7681d))


### Refactors

* **dialog:** replace page merge alert with dialog ([5fd1951](https://github.com/athensresearch/athens/commit/5fd1951bedd83f48316d91eb24ec74c478ef7b3d))


* remove old alert component ([ac9cc4f](https://github.com/athensresearch/athens/commit/ac9cc4f2bb26d69f205820a520b104799875c597))


## [1.0.0](https://github.com/athensresearch/athens/compare/v1.0.0-beta.98...v1.0.0) (2021-11-12)

## [1.0.0-beta.98](https://github.com/athensresearch/athens/compare/v1.0.0-beta.97...v1.0.0-beta.98) (2021-09-27)

## [1.0.0-beta.97](https://github.com/athensresearch/athens/compare/v1.0.0-beta.96...v1.0.0-beta.97) (2021-09-21)


### Bug Fixes

* Correct JS constructor name. ([bfbc940](https://github.com/athensresearch/athens/commit/bfbc94020a16793be7cd6f65ae78a08ab2f2abe3))
* Just errors and crashes sent to Sentry. ([7c48179](https://github.com/athensresearch/athens/commit/7c48179ec67d59104f3823a7f1d4f1df36845c78))
* Sort linked references by date descending. ([95dbd60](https://github.com/athensresearch/athens/commit/95dbd60dac93ce524c5fe64ee6b2336ef8ce2940))

## [1.0.0-beta.96](https://github.com/athensresearch/athens/compare/v1.0.0-beta.94...v1.0.0-beta.96) (2021-09-02)


## [1.0.0-alpha.rtc.8](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.7...v1.0.0-alpha.rtc.8) (2021-09-23)


### Features

* Password protection ([c4027eb](https://github.com/athensresearch/athens/commit/c4027eb9c93c19b75a177b7706a60b1a8205592a))
* send full presence state on connect ([710cefb](https://github.com/athensresearch/athens/commit/710cefb244c4df6b476bf0e9410dc0ea73df6854))
* set user presence on first child block when navigating ([8001ba5](https://github.com/athensresearch/athens/commit/8001ba50082238c2e25b08858d33863f3de3dc61))


### Bug Fixes

* all pages is slow when a page has 100+ blocks ([e2e3204](https://github.com/athensresearch/athens/commit/e2e3204fc2d5746cd55420ae5bb3bc91ce186663))
* **db menu:** less broken style for db picker menu ([e82825a](https://github.com/athensresearch/athens/commit/e82825a9ccc262f35dd364b9fb07f9ee0567968c))
* review items ([f820cef](https://github.com/athensresearch/athens/commit/f820cef2cbeda1a6f6b500bcdcc6c0389602039e))
* selection issues. ([297df4a](https://github.com/athensresearch/athens/commit/297df4a7d4f66ce2c984748bacc4552ca5ecd7a1))

## [1.0.0-alpha.rtc.7](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.6...v1.0.0-alpha.rtc.7) (2021-09-21)


### Bug Fixes

* Catchup with wrong RTC releases. ([9e48f65](https://github.com/athensresearch/athens/commit/9e48f657a7531aeb72ae43936753ac17070a90e2))
* set body classes ([4a7d3ac](https://github.com/athensresearch/athens/commit/4a7d3aca71be253e0af2d62a84fa6a68128ae6f4)), closes [#1654](https://github.com/athensresearch/athens/issues/1654)

## [1.0.0-alpha.rtc.4](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.3...v1.0.0-alpha.rtc.4) (2021-09-16)


### Features

* add type for connection and host address ([a305db5](https://github.com/athensresearch/athens/commit/a305db52c019d54b6771eae219943b1f1c4c68a2))
* **apptoolbar:** improve apptoolbar state and presence ([242ee95](https://github.com/athensresearch/athens/commit/242ee959cc9123f6b9f821fa61c330e73dc0e50d))
* build proper tsx button component ([107d3dd](https://github.com/athensresearch/athens/commit/107d3dd7557fd48781170d68b8d1c14fa281b4a6))
* **button:** add button variants ([2063569](https://github.com/athensresearch/athens/commit/20635691d483fba55ca5b19d1f12e98e55cacfd2))
* **db icon:** now support emoji and custom colors ([7755cef](https://github.com/athensresearch/athens/commit/7755cefb07ae97963ff3ada8dbdb38ead14fffce))
* **dialog:** dialog should pass through modal props ([fa7f8ec](https://github.com/athensresearch/athens/commit/fa7f8ecfc9338d046ac3f2b4b53a4593fb696aab))
* integrate page level presence ([26d3259](https://github.com/athensresearch/athens/commit/26d3259ca4c420c0757954518af426503fd39d2b))
* move presencedetails with settings from concept to base ([ce8f59e](https://github.com/athensresearch/athens/commit/ce8f59ece3450ede7d6bd0b151dcdd0054616bef))
* **rtc:** show connection status in presence toolbar area ([ee6399d](https://github.com/athensresearch/athens/commit/ee6399dd2cb5d545ca30f4ddb0b9c2b6d58d5fdb))
* **storybook:** add accessibility and color theme addons for devx ([05466eb](https://github.com/athensresearch/athens/commit/05466ebc60e05a6f1b7fe0df8d39ae57804ca384))
* **storybook:** add app overview stories ([e3c1ca4](https://github.com/athensresearch/athens/commit/e3c1ca435f5dd1ff650949631e432e347ef5e581))
* **storybook:** add avatar component ([bf6f341](https://github.com/athensresearch/athens/commit/bf6f34118f95f606e08d06eb3369aef28df5838e))
* **storybook:** add avatar stack component ([d6fcf22](https://github.com/athensresearch/athens/commit/d6fcf22e376c815e8178761c1b37fa4950c55bcf))
* **storybook:** add avatars to block story ([1ea93bd](https://github.com/athensresearch/athens/commit/1ea93bd87c0ddc4958f3d527a4f9b1b896e3c2e2))
* **storybook:** add avatars to block story ([b870251](https://github.com/athensresearch/athens/commit/b8702516eae857bf94f9eb1ffb05bfa7be3c611d))
* **storybook:** add basic breadcrumb component ([0f832a1](https://github.com/athensresearch/athens/commit/0f832a17a0a74d99ded5c4b57024995c2884c1c5))
* **storybook:** add basic dialog component ([1a84673](https://github.com/athensresearch/athens/commit/1a846738ddf10d7412cd7caeef68319d8b69cae3))
* **storybook:** add button hover style ([6b9dd15](https://github.com/athensresearch/athens/commit/6b9dd152a82d602d243bc4f474164acdefa980ca))
* **storybook:** add checkbox component ([c4ba5d8](https://github.com/athensresearch/athens/commit/c4ba5d8ed45112836939bac6e1a528329f2d5855))
* **storybook:** add db menu ([98f99b5](https://github.com/athensresearch/athens/commit/98f99b54a5f7402762d4bef447376aed7a5825bb))
* **storybook:** add embed component ([42431fd](https://github.com/athensresearch/athens/commit/42431fd80b635b92b0da230e23bdb164a284a8cf))
* **storybook:** add left sidebar story ([76566e8](https://github.com/athensresearch/athens/commit/76566e8a1b59248feec84984f1f4c2c4d5cd5855))
* **storybook:** add meter component ([4037363](https://github.com/athensresearch/athens/commit/40373639b40f3768d3467475b7f174edf721d27b))
* **storybook:** add presence item to toolbar ([adfafdb](https://github.com/athensresearch/athens/commit/adfafdb5a7d7f74fb2b83a9ce12c31b8f769fa0c))
* **storybook:** add presence story to page ([d1d63e9](https://github.com/athensresearch/athens/commit/d1d63e92b130b8e308d33072019ca4a6ab5d0879))
* **storybook:** add preview concept ([0984ac7](https://github.com/athensresearch/athens/commit/0984ac77340938e51ee98f3faf2450ae1727a5ce))
* **storybook:** add profile settings dialog ([7c87389](https://github.com/athensresearch/athens/commit/7c87389ee5039795d89ae965eaea57475b6a9e64))
* **storybook:** add profile settings dialog ([3412763](https://github.com/athensresearch/athens/commit/3412763626cbdd453be0fa1adc07bff7bbc8513f))
* **storybook:** add references to pages ([54bc086](https://github.com/athensresearch/athens/commit/54bc086ca66351a6c3e0f53f641fced4343621eb))
* **storybook:** add right sidebar component ([510a365](https://github.com/athensresearch/athens/commit/510a365513545be0b38328513ec4d73277a0eeb0))
* **storybook:** add separate browser and app stories ([6426912](https://github.com/athensresearch/athens/commit/64269126a0adf94f80e4383ee5e24b226bd48bac))
* **storybook:** add simple badge component ([fb32567](https://github.com/athensresearch/athens/commit/fb32567cc1db2db1bbb779332481f228226bc9d8))
* **storybook:** added commandbar component ([3513669](https://github.com/athensresearch/athens/commit/3513669b68ed0e414dd7afbba74d30cb93de7695))
* **storybook:** added left sidebar story ([ae6caf8](https://github.com/athensresearch/athens/commit/ae6caf8bfe1150ff3af5e4ff03210374b63536e7))
* **storybook:** allow buttons to have unset shape and style ([8b1e439](https://github.com/athensresearch/athens/commit/8b1e439594da76238065525e08a60c4a48900159))
* **storybook:** allow buttons to have unset shape and style ([6837b42](https://github.com/athensresearch/athens/commit/6837b42e29b8eca32556fc06e4dee7af6533274f))
* **storybook:** begin to implement blocks in typescript ([eb51890](https://github.com/athensresearch/athens/commit/eb518904da1de4378fc5490a5ffc46ae5113e920))
* **storybook:** block in bidilink component and story ([5adecf8](https://github.com/athensresearch/athens/commit/5adecf8a67582d6f79c288166bba51dd2e6a6300))
* **storybook:** block in early text input component ([1a4147e](https://github.com/athensresearch/athens/commit/1a4147ea240c23f281e50aba84e791f05699ba7f))
* **storybook:** block in email settings ([6f9ca11](https://github.com/athensresearch/athens/commit/6f9ca11b9c2115df56ea81cfa27eb4bb64f9f744))
* **storybook:** block in new dailynotes concept ([2c6bc26](https://github.com/athensresearch/athens/commit/2c6bc265e1e196a32bbf8a0a12df2e11675a24b1))
* **storybook:** block in new dailynotes concept ([d4f09a7](https://github.com/athensresearch/athens/commit/d4f09a78650f2a8a293933c79591227d6c0229c4))
* **storybook:** block in settings page ([894308e](https://github.com/athensresearch/athens/commit/894308e7be188d44bd790b9b0503dbe386f4cf7f))
* **storybook:** block in style guide page ([78ca286](https://github.com/athensresearch/athens/commit/78ca28618aa36b0eebd01033785056b009e851ae))
* **storybook:** blocking in daily notes ([ea4fc47](https://github.com/athensresearch/athens/commit/ea4fc473024ddddd9bd205d3304dceeed5246812))
* **storybook:** blocks don't become editable if not editable ([b2ac479](https://github.com/athensresearch/athens/commit/b2ac479aeffe84dfbaf30a4b4e84de7183bc96ec))
* **storybook:** clean up blocks and export subcomponents ([e778605](https://github.com/athensresearch/athens/commit/e778605c9971189929050efb2b4c5d6a9ff63bde))
* **storybook:** compenents and stories for page content ([f887854](https://github.com/athensresearch/athens/commit/f887854abce960574f4de58ad06c1acff127874d))
* **storybook:** create css vars in js instead of clj ([dca0688](https://github.com/athensresearch/athens/commit/dca06885cc21c086010eacd45c9d3fb8bb492310))
* **storybook:** electron-like wrapper for desktop testing in storybook ([7ada2fd](https://github.com/athensresearch/athens/commit/7ada2fd7435f8380a5027ee481723b4d1e6cf5c9))
* **storybook:** more working block aspects ([3984224](https://github.com/athensresearch/athens/commit/3984224539ca7ce3b42768b7f63cdebcfad3f36a))
* **storybook:** previews can render limited block content ([fad186d](https://github.com/athensresearch/athens/commit/fad186dfd99e498c4f96254cd34b20608fe59f18))
* **storybook:** themed story context ([5c90fe2](https://github.com/athensresearch/athens/commit/5c90fe25ee8ce68ab0c96830082dc30177ea2c7f))
* **storybook:** update storybook build config ([0fd36fe](https://github.com/athensresearch/athens/commit/0fd36fe838c85b30bd4eb1c5a6d2abcd3558984f))
* **storybook:** use badges to indicate component status ([5e49e03](https://github.com/athensresearch/athens/commit/5e49e03dccc95aa745b7cb7a4eba3cc095aa4f2a))
* **storybook:** use context provider for presence ([77f6643](https://github.com/athensresearch/athens/commit/77f6643a9737dfb6475c9c7e2f9acd88647e2184))
* **storybook:** use presence context for page ([a477a84](https://github.com/athensresearch/athens/commit/a477a846be4bc3d4be902dbc1515cae9f70f337c))
* **style:** add serif font var ([184d56f](https://github.com/athensresearch/athens/commit/184d56f97296852772c3af4c32da422ed90ec8fc))
* **welcome, icons:** dbs support emoji and color ([207097c](https://github.com/athensresearch/athens/commit/207097c1cadc60721c8c36ff7e1dcb7d7f84b304))
* **welcome:** block in welcome component ([6da39a9](https://github.com/athensresearch/athens/commit/6da39a9d6f8381b3b423fd57a093c3d25d36477b))
* **welcome:** block in welcome component ([3f3bb38](https://github.com/athensresearch/athens/commit/3f3bb38ec42e7be0be9eeacbe8c1e526e03ee5d9))


### Bug Fixes

* add typeroots back ([9cc2457](https://github.com/athensresearch/athens/commit/9cc2457b9750254a2c9b3b0eb95e832be251c679))
* **breadcrumbs:** use proper attribute for svg stroke properties ([17ae5e6](https://github.com/athensresearch/athens/commit/17ae5e6d63a0d598f05ef1539263b9b6e814cd5d))
* broadcast username update ([28111a2](https://github.com/athensresearch/athens/commit/28111a2b4531e7e303c7ebde1f017e2235a5840b))
* comment unused prop ([5ae417d](https://github.com/athensresearch/athens/commit/5ae417d1dd4d097852b8f9797e68830182c0156e))
* concurrent resolution should not happen. ([698913e](https://github.com/athensresearch/athens/commit/698913ec7dda9330eb891392e323600c5480d9af))
* don't error out when changing name ([65ea223](https://github.com/athensresearch/athens/commit/65ea223db60f7330a3cfc0eab60e91e79c250785))
* don't exclude root stories ([10dc517](https://github.com/athensresearch/athens/commit/10dc5171e0ef96d2f5bada932e87ac1825e0d797))
* Don't send tx data with db-dump. ([8610251](https://github.com/athensresearch/athens/commit/8610251c5ce8fb5a7a1fb7e5d1078d9053422c93))
* don't show babel warning durings storybook build ([cdb30ab](https://github.com/athensresearch/athens/commit/cdb30ab92a059fad3cf1e1fe3506387565e15311))
* further babel warning fixes ([7086789](https://github.com/athensresearch/athens/commit/7086789893e6c5b606299026c2053c9bb6edc562))
* **overlay:** don't specify overlay flex direction ([f9c751c](https://github.com/athensresearch/athens/commit/f9c751cec391a6479df47c2235762c321ed3c9b0))
* remove duplicate require ([f0ec1df](https://github.com/athensresearch/athens/commit/f0ec1df950ea862736641543e40023f6a62ad562))
* remove duplicated button file ([ee20473](https://github.com/athensresearch/athens/commit/ee20473c4e7b2eb188db6e6b4103513943ea7266))
* silence postcss deprecation warning ([1900e10](https://github.com/athensresearch/athens/commit/1900e1017ef34728b17ddff8b6e15e5e14a1a79a)), closes [/github.com/storybookjs/storybook/issues/14440#issuecomment-814326123](https://github.com/athensresearch//github.com/storybookjs/storybook/issues/14440/issues/issuecomment-814326123)
* src paths for comps should match src/js depth ([fcb39ec](https://github.com/athensresearch/athens/commit/fcb39ec700cd90997335e487752a2940567fdf0f))
* **storybook:** add missing config ([c522c5d](https://github.com/athensresearch/athens/commit/c522c5d6ce3f0e1c9bedafd82e0054c887478e54))
* **storybook:** add missing mock data ([52fe409](https://github.com/athensresearch/athens/commit/52fe409687b815637e37fae5385c84a46f86531c))
* **storybook:** add missing rename changes ([1351e0c](https://github.com/athensresearch/athens/commit/1351e0c885df9724d5cb5e6ca9b11c0404103846))
* **storybook:** add missing shadows to block tools ([f5d42e9](https://github.com/athensresearch/athens/commit/f5d42e9ccf95b1bbd9fb550caa3d792dbd01688e))
* **storybook:** add missing spacing in cmd bar button ([0e1e832](https://github.com/athensresearch/athens/commit/0e1e832cd73aa40c76d8e3518dbcf2395240ba00))
* **storybook:** apply base styles to body ([7ed2d4a](https://github.com/athensresearch/athens/commit/7ed2d4a888dd7773a6db893d9c84c8a7c764679e))
* **storybook:** attempt fix for uneditable blocks ([3a8a6af](https://github.com/athensresearch/athens/commit/3a8a6affc312a0c4dcf695706f1f5ea12e5c4acf))
* **storybook:** avatars appear correctly ([f491c6d](https://github.com/athensresearch/athens/commit/f491c6d2e8122072202e5ff084819a50262ab3c6))
* **storybook:** better example linked block text ([02524fc](https://github.com/athensresearch/athens/commit/02524fca29bcabd06c6902b873bd968b59da908e))
* **storybook:** better story background ([896c1ee](https://github.com/athensresearch/athens/commit/896c1ee86e7324d78cc000feabccdccf2893ac92))
* **storybook:** blocks open by default ([26d4f93](https://github.com/athensresearch/athens/commit/26d4f93b1d1145a381b6ad96c8b1991e58517265))
* **storybook:** buttons passthrough classname ([3737c33](https://github.com/athensresearch/athens/commit/3737c335cd0ce08608a36ae4491c11e38edab141))
* **storybook:** clean up button story ([5b29b1a](https://github.com/athensresearch/athens/commit/5b29b1a8b75c74eb218ab715f4c42b1220d6eab4))
* **storybook:** commandbar heading appears above text ([96cf6d6](https://github.com/athensresearch/athens/commit/96cf6d68fe376635f79a00600d4a35783841d013))
* **storybook:** correct minor issues with browser and standalone stories ([d8e27fc](https://github.com/athensresearch/athens/commit/d8e27fcfd2ccf2d730ef780f0a3b5f143af07ebd))
* **storybook:** don't use broken story wrapper ([ae62c45](https://github.com/athensresearch/athens/commit/ae62c45095645f94dacd9e3bcdf23e1f3aab9dd6))
* **storybook:** finally solve theme context issue ([36a7cca](https://github.com/athensresearch/athens/commit/36a7cca0258f29a694e5aab6166dc0cf0c0feccb))
* **storybook:** fix a bunch of button bugs ([4c5eb62](https://github.com/athensresearch/athens/commit/4c5eb62e9293c358db9661eedd848dfcd0df23ce))
* **storybook:** fix a bunch of button bugs ([94d09a9](https://github.com/athensresearch/athens/commit/94d09a903e9a51a691ec73b515d30d0a6e59bd5b))
* **storybook:** fix avatar positioning on blocks ([b9ac583](https://github.com/athensresearch/athens/commit/b9ac5835c775eb8541b3d991aa86d8d018df0612))
* **storybook:** fix block recurse limiter ([a4ffe47](https://github.com/athensresearch/athens/commit/a4ffe4726b92dea2ad1f03db87d291c6ece28f59))
* **storybook:** generated blocks toggle properly ([7af9c8c](https://github.com/athensresearch/athens/commit/7af9c8cb2e036cb18ba627715e4c4c23dec77a44))
* **storybook:** get proper mock data for toolbar ([9784052](https://github.com/athensresearch/athens/commit/9784052a6ec16b1d0a00f64b3378974a6b57dee1))
* **storybook:** get proper mock data for toolbar ([ce4fb9f](https://github.com/athensresearch/athens/commit/ce4fb9ff3b4153e5bcbd15a527b1b2f5dd0d196c))
* **storybook:** hide command bar on click behind ([d56c28b](https://github.com/athensresearch/athens/commit/d56c28bbaf451916be3f0d3468d9fa268d4830d9))
* **storybook:** include missing shadow style ([9109914](https://github.com/athensresearch/athens/commit/91099146f877448ecd1f7c6ecab22845a3f707f9))
* **storybook:** make os stories work again ([617bf5c](https://github.com/athensresearch/athens/commit/617bf5ceaa759fb9a0d684bbac78b2114168f688))
* **storybook:** make window buttons visible in linux ([b4d4c20](https://github.com/athensresearch/athens/commit/b4d4c20d9c5c9b15a085d28e4606b277b997a916))
* **storybook:** minor cleanup ([f8f6f26](https://github.com/athensresearch/athens/commit/f8f6f26d2215506093dc9c7eecb1460d85958adb))
* **storybook:** minor fixes to style generation ([55dc649](https://github.com/athensresearch/athens/commit/55dc6494aa13510c4a6f451332b0a0c6c6c58636))
* **storybook:** minor layout fix ([4c97d4b](https://github.com/athensresearch/athens/commit/4c97d4b3d13da55f3a1f871f6998e885097f5617))
* **storybook:** minor presence cleanup ([5d3a8b2](https://github.com/athensresearch/athens/commit/5d3a8b28c4dc9c934c47ade11ceffedb54deaf1b))
* **storybook:** page menu toggle should be round ([30a24ed](https://github.com/athensresearch/athens/commit/30a24ed4c66124e505e446066c5564af74c7a5d6))
* **storybook:** permute opacities into style map ([9df8ce7](https://github.com/athensresearch/athens/commit/9df8ce7c5c6cece028910a8f5597d285178f257a))
* **storybook:** presence works on standalone story ([a1ed4a9](https://github.com/athensresearch/athens/commit/a1ed4a9723165054c892935a529d3fb990fdb7bd))
* **storybook:** properly align left sidebar footer bits ([6fa1784](https://github.com/athensresearch/athens/commit/6fa1784b801d79706669aff1a2e7119aa2f7d649))
* **storybook:** properly capture focus on presence overlay ([059dfc7](https://github.com/athensresearch/athens/commit/059dfc755451d412043322d9606d5b6b9368fa7a))
* **storybook:** properly place page content ([8f1161d](https://github.com/athensresearch/athens/commit/8f1161daea3b6c6cb0dd58d00988ae295ed558d8))
* **storybook:** relink failing page story ([54d3612](https://github.com/athensresearch/athens/commit/54d3612a43a9e05daddfc451975460184ad88d45))
* **storybook:** remove autocomplete and suggest from command bar ([226d449](https://github.com/athensresearch/athens/commit/226d4495763b42c003688b56a635ebdfdf5ab01f))
* **storybook:** remove duplicate avatar element from block ([695e151](https://github.com/athensresearch/athens/commit/695e151ef9a677b808b364ffc2bbaefbd9c2adea))
* **storybook:** selected block backgrounds no longer stack ([afb3b40](https://github.com/athensresearch/athens/commit/afb3b40eea001748d897c4a663fa659db3f0898c))
* **storybook:** solve issue with plain button ([aca8ba4](https://github.com/athensresearch/athens/commit/aca8ba457de668a9820750a04aab989053214376))
* **storybook:** use propber background for stories ([d66861d](https://github.com/athensresearch/athens/commit/d66861d8a1f163cad086c5afb7c2b79ae6a204e0))
* **storybook:** use updated link color in dark mode too ([cf6e468](https://github.com/athensresearch/athens/commit/cf6e46844b8b0361b4f885153611b83d25b35ce2))
* **storybook:** use user color for block side border ([c1c7163](https://github.com/athensresearch/athens/commit/c1c7163bef86e439323fff779b604079abcc0907))
* **storybook:** various issues with app layout and page spacing ([a9eeb36](https://github.com/athensresearch/athens/commit/a9eeb36b429159f564cde627a358909f2400dc7e))
* **style:** properly support nested theme colors ([c38fc23](https://github.com/athensresearch/athens/commit/c38fc234e40fed5314066c3409b536ded8c69a7c))


### Refactors

* **blocks:** use hooks for added block features ([3470e93](https://github.com/athensresearch/athens/commit/3470e93e7b6287b31c79f988a2c8d5563cb875d7))
* **dbicon:** move icon into components root ([8aee7c7](https://github.com/athensresearch/athens/commit/8aee7c7e975912ff0ca43b936d79f9240d8de7cc))
* **docs:** use decorators for whole-app story wrappers ([f23718f](https://github.com/athensresearch/athens/commit/f23718fa8a4a5a0cda1f6a5da1bc0ed4255806d1))
* move concept components to concept stories header ([f1827c4](https://github.com/athensresearch/athens/commit/f1827c46e5decf8654a83f87597ba52acd4f3305))
* **page, blocks:** clearer component relations ([92afde2](https://github.com/athensresearch/athens/commit/92afde244172476b279a494a3632018a6601dc5d))
* **storybook:** add mock data and app state ([2977b19](https://github.com/athensresearch/athens/commit/2977b194adbf3501419f0777c3c827c0fe930bbd))
* **storybook:** another round of button fixes ([26b36c6](https://github.com/athensresearch/athens/commit/26b36c65be166196e5b7cfa0e56631869c783f7e))
* **storybook:** better fn for block rendering ([1c4d243](https://github.com/athensresearch/athens/commit/1c4d2432f8af5e063ed107725ecd52e3bdd41701))
* **storybook:** better mock data for database menu ([ffa4677](https://github.com/athensresearch/athens/commit/ffa46770b010d9cb32f3c62929dcebe00dd2ef2c))
* **storybook:** better story organization ([5d5bf56](https://github.com/athensresearch/athens/commit/5d5bf56248f5023c3a1c377322c204347eb19e9d))
* **storybook:** blocks render from structured json ([6bcb7d4](https://github.com/athensresearch/athens/commit/6bcb7d489a593d1088519b68af5a35ad9b59ce47))
* **storybook:** button now pure styled-component for easier overrides ([1c7cd4d](https://github.com/athensresearch/athens/commit/1c7cd4d442decd655ed7f6047dcce74843686d34))
* **storybook:** button now pure styled-component for easier overrides ([c12c6d5](https://github.com/athensresearch/athens/commit/c12c6d50637cda7a0a1c857cf400fb3595a93d47))
* **storybook:** improve block tree recursing ([f80f8c6](https://github.com/athensresearch/athens/commit/f80f8c60f4d9cfe232983dd25194bd9e9fa77c37))
* **storybook:** lift db and presence components ([22caefd](https://github.com/athensresearch/athens/commit/22caefda8115dac70c0d3cf0d55f10d5d23d12f0))
* **storybook:** make recurseblocks function more available ([18d4e9d](https://github.com/athensresearch/athens/commit/18d4e9de6b54c086fdf209a68e91180fc387f41a))
* **storybook:** move block data to mockdata file ([1f03eda](https://github.com/athensresearch/athens/commit/1f03edae32a1f5df1c260e912bebde12c6a57c79))
* **storybook:** move maincontent into app components ([ffe254e](https://github.com/athensresearch/athens/commit/ffe254e3f74c4cd5fec046a4e7fbd5254a622bac))
* **storybook:** move most components under concept dir ([5424b00](https://github.com/athensresearch/athens/commit/5424b00e7d0e14f48822979c5cb9b7c4140f430e))
* **storybook:** move storybook state to app hook ([3f2ecd7](https://github.com/athensresearch/athens/commit/3f2ecd7b8628550a5d3f0879b38ab6f106e7e128))
* **storybook:** rebuild avatars ([0fa1e29](https://github.com/athensresearch/athens/commit/0fa1e2945ee88ed3db3bfbf7f56ff1383e32a595))
* **storybook:** refactor block stories ([a0a35e5](https://github.com/athensresearch/athens/commit/a0a35e58248ea5f277d84e8ea11470aec96a4e07))
* **storybook:** reimplement page menu with proper focus and portal ([83beef8](https://github.com/athensresearch/athens/commit/83beef8dbdd886205535efbf4a19903fcbc439d3))
* **storybook:** reorganize link story component ([ecda273](https://github.com/athensresearch/athens/commit/ecda2730b4775e78d3796a3d96e2282b126faa64))
* **storybook:** use hooks for block fns ([8f60c9e](https://github.com/athensresearch/athens/commit/8f60c9e1486c1f2691a103e76bf69411f72249b2))
* **storybook:** use simpler more consistent desktop story wrapper ([0c356e5](https://github.com/athensresearch/athens/commit/0c356e5dafbe35dcccb9c6e3170ffd74dbb14580))
* use new button component ([c9e2ff5](https://github.com/athensresearch/athens/commit/c9e2ff5e2f65241b109db5acf27831102e4b3fb5))
* use root relative imports for components ([454c130](https://github.com/athensresearch/athens/commit/454c1302405261b136c8db7cf356a2869e3a487c))


* add operating system type ([3d377de](https://github.com/athensresearch/athens/commit/3d377de2665d1630dfa46a6358a4e7cfa52fbaef))
* fix import semantics for components ([65cd0e4](https://github.com/athensresearch/athens/commit/65cd0e4b66c27d16a9969a1e2460496eec8e63bd))
* fix misc type issues ([fecd599](https://github.com/athensresearch/athens/commit/fecd599ead0cfbf9362d1f4aba751bce73dc1d83))
* fix spacing ([da4b75a](https://github.com/athensresearch/athens/commit/da4b75a273e45eb83bf2ad1f15458063af6b9beb))
* formatting updates ([a2b006d](https://github.com/athensresearch/athens/commit/a2b006d5d4dbe1927df42dcd58e633c6d52b404e))
* merge from upstream changes ([1bcd729](https://github.com/athensresearch/athens/commit/1bcd729a9a973e444badde05219022af4220c807))
* output babel compiled files in dist/js ([ddff507](https://github.com/athensresearch/athens/commit/ddff507a1b7ed7eaa2268c2fd79798cc53e35dbb))
* **storybook:** clean up block mock data ([3062065](https://github.com/athensresearch/athens/commit/3062065761258b4dec54b31c46c657ae3b5c397f))
* **storybook:** clean up misc warnings ([5d5240d](https://github.com/athensresearch/athens/commit/5d5240d561d063c4099d328c8191eb1da18ffca6))
* **storybook:** clean up page story ([ad26746](https://github.com/athensresearch/athens/commit/ad26746d08f3349687bd69d501038ca9a39396b4))
* **storybook:** clean up preview component code ([935ce58](https://github.com/athensresearch/athens/commit/935ce58d3202c5775e3f6809494b78b69135d156))
* **storybook:** mark components as in-use ([5eb4038](https://github.com/athensresearch/athens/commit/5eb403855e97efb013257be9459d3bdc94715482))
* **storybook:** minor block cleanup ([0072c34](https://github.com/athensresearch/athens/commit/0072c3485019aae9bbacd512ff3f0e978c6ba270))
* **storybook:** minor block mockdata cleanup ([5b82a19](https://github.com/athensresearch/athens/commit/5b82a19b9006a57971a3640028d8756c21f97546))
* **storybook:** minor cleanup of app stories ([fa761c8](https://github.com/athensresearch/athens/commit/fa761c846995e27644f47ad25f7db9412436c887))
* **storybook:** minor utility cleanup ([af89497](https://github.com/athensresearch/athens/commit/af894974e25e1fa5cda9637e37e241ce6cf6d075))
* **storybook:** misc minor story fixes ([5255e98](https://github.com/athensresearch/athens/commit/5255e982eaed6cf7d00231208fab1053d92923ed))
* **storybook:** raise tsconfig root level ([6dc58f3](https://github.com/athensresearch/athens/commit/6dc58f3648492303c52d4645f54eb4c6397edfdd))
* **storybook:** remove manual checkbox style ([4890ce7](https://github.com/athensresearch/athens/commit/4890ce7c9e7c82c9f013b8ad0c306315b178cd12))
* **storybook:** remove unused files ([c9102e8](https://github.com/athensresearch/athens/commit/c9102e8c027ac3327f143341016b6a82b8e7059f))
* **storybook:** remove unused import ([8caedb0](https://github.com/athensresearch/athens/commit/8caedb043809859d495e25bb6377a43e1481069f))
* **storybook:** resolve misc errors and issues ([4fb74d1](https://github.com/athensresearch/athens/commit/4fb74d1cc1f070f84e7d4924e11df3200b2abf52))
* **storybook:** upgrade storybook ([5480037](https://github.com/athensresearch/athens/commit/54800378e1e727dda35b14ce469fd8ef99d06391))
* support @ as root alias in js components ([403e86a](https://github.com/athensresearch/athens/commit/403e86a1f9cb780cfe3ef9c1f71d3ca61d5fe2d1))
* support tsx components and storybook ([59c6629](https://github.com/athensresearch/athens/commit/59c662915e5efebc2df9293a01d5f675dcedacf8))

## [1.0.0-alpha.rtc.3](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.2...v1.0.0-alpha.rtc.3) (2021-09-09)


### Features

* notify client that lan-party is over 😢 ([864582a](https://github.com/athensresearch/athens/commit/864582a639ca06dc1c2a47eb7a6f9076b094af86))
* replace block refs with content ([80f2be0](https://github.com/athensresearch/athens/commit/80f2be03443eb6213c5fe8e4660698a2ce1fc053))
* replace block refs with text on ref delete ([8529546](https://github.com/athensresearch/athens/commit/8529546b012b2f63b00dde02b950e18fd4245334))
* unlink multiple block refs ([57130cd](https://github.com/athensresearch/athens/commit/57130cd1c5b5bc63689cc48dfffef96c17232552))
* use one event handler for conn-status ([6afd0fc](https://github.com/athensresearch/athens/commit/6afd0fcdb25a0d3af42d302448d9fca2f3824a71))


### Bug Fixes

* `docker-compose` setup timing-out. ([50bbc0d](https://github.com/athensresearch/athens/commit/50bbc0daf6a7da24f689f05bf6f6e9799d2f5046))
* block refs replace failing in single uid ([02d913d](https://github.com/athensresearch/athens/commit/02d913dfb34c434d69626df58a78996f5bf9d5df))
* bullet too big ([ffd026d](https://github.com/athensresearch/athens/commit/ffd026de803366bdeee49a3534486e5d912a3b1a))
* bullet too small ([49439d5](https://github.com/athensresearch/athens/commit/49439d52b01060999e5fe56623a37547ff3b7414))
* detect when client is not able to connect to remote. ([1bddf89](https://github.com/athensresearch/athens/commit/1bddf8973aa4aaf2a02738bd64cac88c679784f2))
* error when deleting a block with block ref ([f6cba22](https://github.com/athensresearch/athens/commit/f6cba22ced3f585a09d90101306f805b56042bc7))
* import react-dom instead of using missing global ([70027b9](https://github.com/athensresearch/athens/commit/70027b95188eb0e2c5a5a7ccfdbc20337641e00c)), closes [/github.com/athensresearch/athens/pull/1564#discussion_r704963708](https://github.com/athensresearch//github.com/athensresearch/athens/pull/1564/issues/discussion_r704963708)
* Make backend logs a bit more readable. ([2d79531](https://github.com/athensresearch/athens/commit/2d79531685520afab6848b1c5fdcc6b8f96b62db))
* Remote client freezes when navigating down. ([ab910a1](https://github.com/athensresearch/athens/commit/ab910a1c014f6b271a3742c89774f635c0c31bf2))
* schema of selected-delete ([d135dbd](https://github.com/athensresearch/athens/commit/d135dbdac068f0ec21a92beeafca25de5803dcb0))
* use vector to convert title ([084b168](https://github.com/athensresearch/athens/commit/084b168940a78cb9a7ec5094822fd2b75a44456f))


* add basic stress test ([29ae7d8](https://github.com/athensresearch/athens/commit/29ae7d87ee4837b86900dfe50fb84da69c6d5e95))
* add stress test ([63ed490](https://github.com/athensresearch/athens/commit/63ed4909fcd4b2f5db4efe39a79796f0bf506721))
* Add Vercel previews ([#1643](https://github.com/athensresearch/athens/issues/1643)) ([c860ab4](https://github.com/athensresearch/athens/commit/c860ab465fca94eefe1aa5044c54a58b04bc4c03))
* build components once before starting client watch ([9fa0690](https://github.com/athensresearch/athens/commit/9fa0690a817fd784ecdf628c6209f4cdf7d2b787))
* fix spacing ([dd329df](https://github.com/athensresearch/athens/commit/dd329df9cb61613a06d905d174e6619980df904b))
* linked refs text replacement ([35200af](https://github.com/athensresearch/athens/commit/35200af3e76e8d05ec90705946a84c4eb93eb0c3))
* support tsx components and storybook ([#1564](https://github.com/athensresearch/athens/issues/1564)) ([925f7a4](https://github.com/athensresearch/athens/commit/925f7a4c089d8d64a1082da2a452d5b7dc008ba1))

## [1.0.0-alpha.rtc.2](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.1...v1.0.0-alpha.rtc.2) (2021-08-26)


### Bug Fixes

* A bit more logging while we're debugging. ([a8903b5](https://github.com/athensresearch/athens/commit/a8903b5c2503134fdf6bd80b8e3f6aea12b1baa1))
* Block doesn't render when clicking outside ([12c039a](https://github.com/athensresearch/athens/commit/12c039a9a5623d322ef52f9c7a65d134bc794b29)), closes [#1491](https://github.com/athensresearch/athens/issues/1491)
* **bullets:** make bullets same size across zoom levels ([4b5d877](https://github.com/athensresearch/athens/commit/4b5d8770e26153c598e9f706530c0ec0c635be25))
* Can't delete multiple blocks at once ([c8825e6](https://github.com/athensresearch/athens/commit/c8825e6442311c95509d5bce66681cb257c72f68)), closes [#1516](https://github.com/athensresearch/athens/issues/1516)
* Daily pages creation from Daily Pages. ([287fa74](https://github.com/athensresearch/athens/commit/287fa74cd5420c04815de7004746f2e652df1411))
* Log error when handler doesn't return handle status event. ([f668448](https://github.com/athensresearch/athens/commit/f6684487c9d123971030cac5ca26f78606c4b74e))
* make bullet look closer to previous collapsed bullets ([ee892fc](https://github.com/athensresearch/athens/commit/ee892fcc5f2b14f61dc5d7a8027da09838fd0232))
* nav-daily-notes and daily-note/reset ([765d6fc](https://github.com/athensresearch/athens/commit/765d6fc1ed56feae1cdc5077c2b2410ae7fd71c1))
* Presence broadcast new username when new player introduces. ([6e46576](https://github.com/athensresearch/athens/commit/6e4657657ec5e80993366e85de5e5aecc34ad66e))
* Presence confirm `:presence/editing` & plain keywords for args. ([65ffae2](https://github.com/athensresearch/athens/commit/65ffae25e6523150295a3ef03b2904ac6382ed51))
* problems in the daily page scroll ([8bf3e6b](https://github.com/athensresearch/athens/commit/8bf3e6b60d1497d9c8fb0b6034c968b9fd1cbc48))
* remove unused storage icon ([dcc5e16](https://github.com/athensresearch/athens/commit/dcc5e16fca44ce2478f0652a40e659e0b8842e09))
* Selection behaviour fixed. [#1571](https://github.com/athensresearch/athens/issues/1571) ([a7fd284](https://github.com/athensresearch/athens/commit/a7fd284e019c5d7381a1f98ee57163c989f4c1ee))
* Selection clear was resetting `re-frame` db. ([377e417](https://github.com/athensresearch/athens/commit/377e417a778d7a5c0673dc904b6d243ea69e9560))
* some bullets are not round ([56d608f](https://github.com/athensresearch/athens/commit/56d608f2a74f9dab2798c601dc4495335a930e2e))
* Some bullets are not round ([f583bc5](https://github.com/athensresearch/athens/commit/f583bc565c1784b02d2460315ab841f07f08a0f8))
* Some bullets are not round ([1370fec](https://github.com/athensresearch/athens/commit/1370fec2996f841c2ef15c1cc321e5c428c5e0fe)), closes [#1495](https://github.com/athensresearch/athens/issues/1495)
* update daily page after creation ([e9b140e](https://github.com/athensresearch/athens/commit/e9b140eb3b7b16d2ebea0581f93e0cff2e62564f))


* alignment ([384cad6](https://github.com/athensresearch/athens/commit/384cad62fa53c205878156fd83ed92a996f689a9))
* comment and deploy gh pages to main ([cdac939](https://github.com/athensresearch/athens/commit/cdac9396078f65fb7ed8fe3568659510218aec7d))
* fix ([87c016c](https://github.com/athensresearch/athens/commit/87c016c526119d8fb9bcfb976ef91e5f393b5132))
* only auto-update releases from the main branch ([d98719d](https://github.com/athensresearch/athens/commit/d98719dffab2b5c4e128aeffa2dae62caba11e86))
* only deploy to gh-pages on master ([a29bb6f](https://github.com/athensresearch/athens/commit/a29bb6f776c3be7dd0ddd8c13b47e886ba0a95bd))

## [1.0.0-alpha.rtc.1](https://github.com/athensresearch/athens/compare/v1.0.0-alpha.rtc.0...v1.0.0-alpha.rtc.1) (2021-08-17)


### Bug Fixes

* synced hopefully all the events ([bdf3bf4](https://github.com/athensresearch/athens/commit/bdf3bf4e256c775b32ac8a58d48a54e6b84f2e60)), closes [#1506](https://github.com/athensresearch/athens/issues/1506)


### Refactors

* simplify vector concat -> into ([444bfb9](https://github.com/athensresearch/athens/commit/444bfb9d406d131db6b7e528527077f1c548bb95)), closes [#1498](https://github.com/athensresearch/athens/issues/1498)


* only release jar on ubuntu build ([03b869c](https://github.com/athensresearch/athens/commit/03b869cc44cbef6e32cd33c7eea879426c1f906a))


## [1.0.0-beta.94](https://github.com/athensresearch/athens/compare/v1.0.0-beta.93...v1.0.0-beta.94) (2021-08-04)

## [1.0.0-beta.93](https://github.com/athensresearch/athens/compare/v1.0.0-beta.92...v1.0.0-beta.93) (2021-08-04)

## [1.0.0-beta.92](https://github.com/athensresearch/athens/compare/v1.0.0-beta.91...v1.0.0-beta.92) (2021-08-02)

## [1.0.0-beta.91](https://github.com/athensresearch/athens/compare/v1.0.0-beta.90...v1.0.0-beta.91) (2021-08-02)

## [1.0.0-beta.90](https://github.com/athensresearch/athens/compare/v1.0.0-beta.89...v1.0.0-beta.90) (2021-08-02)


### Bug Fixes

* "open all-pages view" keybinding on Welcome ([#1327](https://github.com/athensresearch/athens/issues/1327)) ([f411c53](https://github.com/athensresearch/athens/commit/f411c53b699e96ca71c52631e652f6dff4fbcf73))
* Selection fixes. ([#1421](https://github.com/athensresearch/athens/issues/1421)) ([c835c79](https://github.com/athensresearch/athens/commit/c835c793bffa79d98d25007b2b525ce514f9f51f)), closes [#1279](https://github.com/athensresearch/athens/issues/1279)


### Enhancements

* **toolbar:** use native operating system toolbar ([#1120](https://github.com/athensresearch/athens/issues/1120)) ([e2c953b](https://github.com/athensresearch/athens/commit/e2c953b5c2bc9257939784499b0755c81b89c89b))

## [1.0.0-beta.89](https://github.com/athensresearch/athens/compare/v1.0.0-beta.88...v1.0.0-beta.89) (2021-06-09)


### Bug Fixes

* when editing long block-page title, title overlaps with child block ([#1291](https://github.com/athensresearch/athens/issues/1291)) ([ed9568b](https://github.com/athensresearch/athens/commit/ed9568bbe326b0e4afcb99c8415f1337425e59c5))
* **#1107:** drop support for *** for thematic-break ([#1203](https://github.com/athensresearch/athens/issues/1203)) ([b1d978e](https://github.com/athensresearch/athens/commit/b1d978e4d2893f0fc5f8612ef4737794c68c73fe)), closes [#1107](https://github.com/athensresearch/athens/issues/1107)
* **#1277:** compare string without dangerous regex injection for slash cmd ([#1287](https://github.com/athensresearch/athens/issues/1287)) ([c1c4c2a](https://github.com/athensresearch/athens/commit/c1c4c2a11cded25017cbba4a9ca15f660cef032f)), closes [#1277](https://github.com/athensresearch/athens/issues/1277) [#1277](https://github.com/athensresearch/athens/issues/1277)
* **click:** Clicking inside a block with hyperlink works on first attempt ([#1236](https://github.com/athensresearch/athens/issues/1236)) ([c619ecf](https://github.com/athensresearch/athens/commit/c619ecfe477cc8b503d504e32daf7e4e5f317f1d))

## [1.0.0-beta.88](https://github.com/athensresearch/athens/compare/v1.0.0-beta.87...v1.0.0-beta.88) (2021-06-06)


### Bug Fixes

* **#1289:** remove autocomplete on backspace of [[ or (( ([eacd2a3](https://github.com/athensresearch/athens/commit/eacd2a322bad0c2901d35f3d1d01e78d5040ca61)), closes [#1289](https://github.com/athensresearch/athens/issues/1289) [#1289](https://github.com/athensresearch/athens/issues/1289)

## [1.0.0-beta.87](https://github.com/athensresearch/athens/compare/v1.0.0-beta.86...v1.0.0-beta.87) (2021-06-06)


### Features

* **athena:** Shift+Click opens in right sidebar, not just Shift+Enter ([#1272](https://github.com/athensresearch/athens/issues/1272)) ([13274dc](https://github.com/athensresearch/athens/commit/13274dc521b7c0e967f75a1b1dd657eab0dcf16c))


### Bug Fixes

* **blocks:** child drop-area-indicator shouldn't squish or be misplaced ([#1264](https://github.com/athensresearch/athens/issues/1264)) ([b04c5a2](https://github.com/athensresearch/athens/commit/b04c5a2eb55438988d697fc1dbf4f6e258966507))


### Enhancements

* **settings:** clarify language around autosave backups ([#1285](https://github.com/athensresearch/athens/issues/1285)) ([de86794](https://github.com/athensresearch/athens/commit/de867941dbd512a56536cd38f4b22b208941f323))


### Documentation

* Create a Contributor Covenant Code of Conduct ([#1210](https://github.com/athensresearch/athens/issues/1210)) ([f5d6a27](https://github.com/athensresearch/athens/commit/f5d6a27eaf692be222e9a264b845854e3654ec54))

## [1.0.0-beta.86](https://github.com/athensresearch/athens/compare/v1.0.0-beta.85...v1.0.0-beta.86) (2021-06-02)


### Bug Fixes

* **selection:** Selection "freeze" ([#1273](https://github.com/athensresearch/athens/issues/1273)) ([b66bfa8](https://github.com/athensresearch/athens/commit/b66bfa84859088940a1d6280f61ced79196162be))


### Performance

* Only run the listener in dev mode ([#1215](https://github.com/athensresearch/athens/issues/1215)) ([b276963](https://github.com/athensresearch/athens/commit/b276963b6096887f68005073bd574619d1623953))


### Documentation

* update one liner in package.json and project.clj ([#1258](https://github.com/athensresearch/athens/issues/1258)) ([1b78701](https://github.com/athensresearch/athens/commit/1b7870161c0ded543ca073cae67af2ec4f6427fd))

## [1.0.0-beta.85](https://github.com/athensresearch/athens/compare/v1.0.0-beta.84...v1.0.0-beta.85) (2021-05-28)


* upgrade yarn deps alongside lein deps, fix demo ([#1246](https://github.com/athensresearch/athens/issues/1246)) ([c1b6195](https://github.com/athensresearch/athens/commit/c1b619519f1e46bd4f5e9dcae6bf86dac9382b77))

## [1.0.0-beta.84](https://github.com/athensresearch/athens/compare/v1.0.0-beta.83...v1.0.0-beta.84) (2021-05-28)


* downgrade re-frame-10x so web version works, comment out deps-check ([#1244](https://github.com/athensresearch/athens/issues/1244)) ([5fd5763](https://github.com/athensresearch/athens/commit/5fd57630c2bc76efba7c73d6b75cb33524935c52))

## [1.0.0-beta.83](https://github.com/athensresearch/athens/compare/v1.0.0-beta.82...v1.0.0-beta.83) (2021-05-28)


### Bug Fixes

* **auto-complete:** pressing [[,(( and enter works better. close [#1214](https://github.com/athensresearch/athens/issues/1214), [#1220](https://github.com/athensresearch/athens/issues/1220) ([#1219](https://github.com/athensresearch/athens/issues/1219)) ([856b282](https://github.com/athensresearch/athens/commit/856b282f00a292b206afa5164a8901a15a3a9203)), closes [#1204](https://github.com/athensresearch/athens/issues/1204)


* update deps and cljstyle fix ([#1224](https://github.com/athensresearch/athens/issues/1224)) ([181ad52](https://github.com/athensresearch/athens/commit/181ad52286d982586a9c1f5016d37553915b6b05))


### Enhancements

* **ui:** Stop content shift when scrollbars appear/disappear ([#1212](https://github.com/athensresearch/athens/issues/1212)) ([9988417](https://github.com/athensresearch/athens/commit/9988417ca3d1298031bfee933366a9969a548910))


### Documentation

* Fix grammar in README ([#1235](https://github.com/athensresearch/athens/issues/1235)) ([e55f3f8](https://github.com/athensresearch/athens/commit/e55f3f82e328ee6b1ca758ac3bd5491f717680c5))


### Performance

* **blocks:** reduce blocks DOM weight ([#1217](https://github.com/athensresearch/athens/issues/1217)) ([7b922a5](https://github.com/athensresearch/athens/commit/7b922a523991fd5f59f69422a34feb47a9a6c758))
* **right-sidebar:** fix memory+time leak with proper GC of sorted-map [#1239](https://github.com/athensresearch/athens/issues/1239) ([#1242](https://github.com/athensresearch/athens/issues/1242)) ([32d66f5](https://github.com/athensresearch/athens/commit/32d66f5e514531a080454dc337cf7535381865fb))

## [1.0.0-beta.82](https://github.com/athensresearch/athens/compare/v1.0.0-beta.81...v1.0.0-beta.82) (2021-05-20)


### Bug Fixes

* **undo:** undo after pair character input ([#1194](https://github.com/athensresearch/athens/issues/1194)) ([b635da0](https://github.com/athensresearch/athens/commit/b635da00d98c296a533510ef4e47fb021800c75b)), closes [#559](https://github.com/athensresearch/athens/issues/559)
* **unlinked-refs:** update unlinked refs when page changes ([#1195](https://github.com/athensresearch/athens/issues/1195)) ([5d7b0fe](https://github.com/athensresearch/athens/commit/5d7b0febca5fb9030378857a32fda08f7d876982))


### Performance

* **search:** faster search for (()), [[]] and ctrl-k ([#1191](https://github.com/athensresearch/athens/issues/1191)) ([5cfcb2a](https://github.com/athensresearch/athens/commit/5cfcb2a60bc0a5079690fcfb8674767d1a458720)), closes [#756](https://github.com/athensresearch/athens/issues/756) [#756](https://github.com/athensresearch/athens/issues/756)

## [1.0.0-beta.81](https://github.com/athensresearch/athens/compare/v1.0.0-beta.80...v1.0.0-beta.81) (2021-05-19)


### Features

* **app-toolbar:** updated filesystem/sync icons ([#1146](https://github.com/athensresearch/athens/issues/1146)) ([e2ba5d7](https://github.com/athensresearch/athens/commit/e2ba5d7f69d8c628df7a86edfd153fb23643a12b))
* **datalog-console:** respond to datalog-console messages in browser ([#1193](https://github.com/athensresearch/athens/issues/1193)) ([3ffb781](https://github.com/athensresearch/athens/commit/3ffb781fbfc44a37156a9290cd49a1e2ff631beb))
* **electron:** set min width and height for electron window ([#1173](https://github.com/athensresearch/athens/issues/1173)) ([f41c028](https://github.com/athensresearch/athens/commit/f41c0289357a06c3d6a5ad538eb0c731457606d5))
* **keybindings:** keybindings for Graph, All Pages, and Settings ([#1192](https://github.com/athensresearch/athens/issues/1192)) ([47efb81](https://github.com/athensresearch/athens/commit/47efb818a02a3e74e6e994337b0e1eb30c83199f))


### Bug Fixes

* **contentarea:** hide multiline text in contentarea ([#1189](https://github.com/athensresearch/athens/issues/1189)) ([dbaa1e5](https://github.com/athensresearch/athens/commit/dbaa1e5138640e2d88a702078e9e1bff408102a7))
* **keybindings:** place caret correctly after ctrl-i italics ([#1176](https://github.com/athensresearch/athens/issues/1176)) ([a11ea7b](https://github.com/athensresearch/athens/commit/a11ea7b8fc3aff2afccf970658adace05f5c7a13))
* **parser:** remove support for underscores so URLs can use ([dd5affb](https://github.com/athensresearch/athens/commit/dd5affb08f1c32efe1917704608bc7380c0df2ae))
* **roam-import:** fix roam-date regex to match ordinal numbers in roam dates more ([#1171](https://github.com/athensresearch/athens/issues/1171)) ([ebd9aac](https://github.com/athensresearch/athens/commit/ebd9aac89e73f2fb7c97bb79903945410c6fe925)), closes [#1135](https://github.com/athensresearch/athens/issues/1135)


* **parser:** add regression test for fixed issue [#1057](https://github.com/athensresearch/athens/issues/1057) ([#1175](https://github.com/athensresearch/athens/issues/1175)) ([e74c0c6](https://github.com/athensresearch/athens/commit/e74c0c6cfe4e4288b7a34ff2588d6d4ae434ddb6))


### Enhancements

* **all-pages:** add arrow UI and re-frame constructs ([#1152](https://github.com/athensresearch/athens/issues/1152)) ([d59198f](https://github.com/athensresearch/athens/commit/d59198ff7f99d2fb80a35e43231b3dfec560955e))

## [1.0.0-beta.80](https://github.com/athensresearch/athens/compare/v1.0.0-beta.79...v1.0.0-beta.80) (2021-05-13)


### Bug Fixes

* **keybindings:** redo sometimes does undo ([#1151](https://github.com/athensresearch/athens/issues/1151)) ([975afc0](https://github.com/athensresearch/athens/commit/975afc04df3422c8a519ef879a522eb0095a7862))


* add cljstyle alias to lein ([#1132](https://github.com/athensresearch/athens/issues/1132)) ([a64025a](https://github.com/athensresearch/athens/commit/a64025a3abd9b1ceaa6b1ebd246f06f9f9a79038))

## [1.0.0-beta.79](https://github.com/athensresearch/athens/compare/v1.0.0-beta.78...v1.0.0-beta.79) (2021-05-10)


### Bug Fixes

* Removal of a daily journal page creates a 404 ([#1094](https://github.com/athensresearch/athens/issues/1094)) ([640420f](https://github.com/athensresearch/athens/commit/640420f8fa81ccf88b0a3dc73b55f89949e91a87))
* **block-embed:** when block-embed is deleted, render uid instead of "invalid" ([#1093](https://github.com/athensresearch/athens/issues/1093)) ([23f1f93](https://github.com/athensresearch/athens/commit/23f1f93453bc090ec6ac4fe1e5562f1183f4365d))


### Enhancements

* **all-pages:** allow sort by titles / links / times ([#1105](https://github.com/athensresearch/athens/issues/1105)) ([2e6c548](https://github.com/athensresearch/athens/commit/2e6c54865e1a7b78419c639627aebf4cad621695))
* **daily-notes:** Shorter debounce time for loading of daily pages ([#1136](https://github.com/athensresearch/athens/issues/1136)) ([9dca967](https://github.com/athensresearch/athens/commit/9dca967ce1564f9c6c09a46f8d3324b6c9c81585))
* **left-sidebar:** clicking on the logo opens to issue creation rather than main repo [#1130](https://github.com/athensresearch/athens/issues/1130) ([82dd853](https://github.com/athensresearch/athens/commit/82dd853d1f9d253a315f8bc7aadcd9e625300367))
* **linked-refs:** sort references by newest first ([#1124](https://github.com/athensresearch/athens/issues/1124)) ([19fb97a](https://github.com/athensresearch/athens/commit/19fb97add8e744e24e7d7df3aec2238556cf22da)), closes [#728](https://github.com/athensresearch/athens/issues/728)

## [1.0.0-beta.78](https://github.com/athensresearch/athens/compare/v1.0.0-beta.77...v1.0.0-beta.78) (2021-04-29)


### Features

* **blocks:** improved visibility of hover/focus of block bullets ([#1046](https://github.com/athensresearch/athens/issues/1046)) ([84f971a](https://github.com/athensresearch/athens/commit/84f971a20a4a1d7ef510916a490b94ae5c83d572))
* **style:** improved highlight color consistency ([#1049](https://github.com/athensresearch/athens/issues/1049)) ([4546825](https://github.com/athensresearch/athens/commit/454682547046109d0cea3512d17d4fb3095397ec))


### Bug Fixes

* **breadcrumbs:** limit breadcrumb size ([#1047](https://github.com/athensresearch/athens/issues/1047)) ([a4686cc](https://github.com/athensresearch/athens/commit/a4686cc2d7978318e63c5ca5ab7618707a7e6048))
* **filesystem:** show hidden database merge button ([#1079](https://github.com/athensresearch/athens/issues/1079)) ([432efb9](https://github.com/athensresearch/athens/commit/432efb9e0e24035ce703a11043065913800581f8))
* use index.transit file if already exists ([#1044](https://github.com/athensresearch/athens/issues/1044)) ([865093f](https://github.com/athensresearch/athens/commit/865093f450dc70be3619f8c062dfbb398b815516))


### Refactors

* **node-page:** replace nodepage dropdown with popover ([#1045](https://github.com/athensresearch/athens/issues/1045)) ([2104370](https://github.com/athensresearch/athens/commit/2104370122e7d9036b6da613a2a850dd451c87ea))

## [1.0.0-beta.77](https://github.com/athensresearch/athens/compare/v1.0.0-beta.76...v1.0.0-beta.77) (2021-04-27)


### Bug Fixes

* **demo:** solve cause of toolbar button wrapping on demo page ([#1037](https://github.com/athensresearch/athens/issues/1037)) ([d0230f6](https://github.com/athensresearch/athens/commit/d0230f66b4277cc4046ed4c0eb2ac3c2d1002a3d))
* allow spaces in image urls ([#1034](https://github.com/athensresearch/athens/issues/1034)) ([aa07a57](https://github.com/athensresearch/athens/commit/aa07a57e8e1b4e2616bd66d8aa3daef3ccb053a8))
* ensure choose file input is visible in merge from roam dialog ([#1032](https://github.com/athensresearch/athens/issues/1032)) ([a69e470](https://github.com/athensresearch/athens/commit/a69e470f566ab37a0c6c0fe55c55c6760adfe0af))


### Documentation

* improve README ([#1018](https://github.com/athensresearch/athens/issues/1018)) ([68d7bf4](https://github.com/athensresearch/athens/commit/68d7bf44ec7541ea7e1db758b7c74ad03a954605))
* update blog links and faces ([5949786](https://github.com/athensresearch/athens/commit/5949786cd912568088f2dbd9813169edbf70c355))


### Refactors

* decompose blocks into its own namespace ([#1033](https://github.com/athensresearch/athens/issues/1033)) ([6023c44](https://github.com/athensresearch/athens/commit/6023c4420a263ebde16742d3d1de1d78b4df473a))
* group pages into new namespace ([#1005](https://github.com/athensresearch/athens/issues/1005)) ([e2046bf](https://github.com/athensresearch/athens/commit/e2046bf7d27a7cf41a3d30e499e9647a6b63520c))


### Enhancements

* **all-pages:** hide empty block bullets in all pages view ([#1040](https://github.com/athensresearch/athens/issues/1040)) ([6a308c5](https://github.com/athensresearch/athens/commit/6a308c5ab024502f1955a9965bc6ba15c5d77578))

## [1.0.0-beta.76](https://github.com/athensresearch/athens/compare/v1.0.0-beta.75...v1.0.0-beta.76) (2021-04-23)


### Bug Fixes

* allow editing of join remote fields ([#1019](https://github.com/athensresearch/athens/issues/1019)) ([3bf2707](https://github.com/athensresearch/athens/commit/3bf27075ca074ccfe7f768ea5d043268524679d7))

## [1.0.0-beta.75](https://github.com/athensresearch/athens/compare/v1.0.0-beta.74...v1.0.0-beta.75) (2021-04-22)


### Bug Fixes

* bugs introduced by new parser ([#1017](https://github.com/athensresearch/athens/issues/1017)) ([a2c7cb6](https://github.com/athensresearch/athens/commit/a2c7cb6b914b62562da0c811fdae246afa4c1cc2))

## [1.0.0-beta.74](https://github.com/athensresearch/athens/compare/v1.0.0-beta.73...v1.0.0-beta.74) (2021-04-22)


### Bug Fixes

* allow for multiple block-refs in a block. ([#1012](https://github.com/athensresearch/athens/issues/1012)) ([f26b719](https://github.com/athensresearch/athens/commit/f26b7195ed6c7975908b6f6640921dcf68274e23))

## [1.0.0-beta.73](https://github.com/athensresearch/athens/compare/v1.0.0-beta.72...v1.0.0-beta.73) (2021-04-21)


* **yarn.lock:** electron 11->12 needs new yarn.lock ([#1009](https://github.com/athensresearch/athens/issues/1009)) ([7239e51](https://github.com/athensresearch/athens/commit/7239e5176139a1c7d6672009325838cc97645376))

## [1.0.0-beta.72](https://github.com/athensresearch/athens/compare/v1.0.0-beta.70...v1.0.0-beta.72) (2021-04-21)


### Bug Fixes

* Shift+click title of reference won't open it in the right sidebar ([#995](https://github.com/athensresearch/athens/issues/995)) ([31e7bd0](https://github.com/athensresearch/athens/commit/31e7bd0a35074aa729d6e68033d665b1ab281497))


### Refactors

* **electron:** update from 11 to 12 ([#982](https://github.com/athensresearch/athens/issues/982)) ([d9d8cbf](https://github.com/athensresearch/athens/commit/d9d8cbf44cc47f15d2d8e19962425fdf165f302a))


### Enhancements

* **electron:** make bg default to dark ([#1003](https://github.com/athensresearch/athens/issues/1003)) ([b7f1c6e](https://github.com/athensresearch/athens/commit/b7f1c6e003d5309413b4908a37ce8b01de25a66f))
* toolbar, sidebar, and scrolling polish ([#998](https://github.com/athensresearch/athens/issues/998)) ([4cf0c99](https://github.com/athensresearch/athens/commit/4cf0c990f009ae334e96803887e9153cd2e07e38))

## [1.0.0-beta.71](https://github.com/athensresearch/athens/compare/v1.0.0-beta.70...v1.0.0-beta.71) (2021-04-21)


### Features

* **app-toolbar:** basic tooltips ([#994](https://github.com/athensresearch/athens/issues/994)) ([2996bad](https://github.com/athensresearch/athens/commit/2996bada15ba8fb1b3eab5ecbd1a25bc2aecc298))


### Bug Fixes

* `deref` error in web environment. ([#999](https://github.com/athensresearch/athens/issues/999)) ([fa186cd](https://github.com/athensresearch/athens/commit/fa186cdb5c6d7f8650ca41ab1e3dc7451905d3a2))


### Refactors

* **parser:** multi-stage parser ([#957](https://github.com/athensresearch/athens/issues/957)) ([9a30ce1](https://github.com/athensresearch/athens/commit/9a30ce139c88b2f412d2f2f8f0c9b597c73994c7))

![](https://media.discordapp.net/attachments/800579670629679165/834182913792671744/115297103-a681b880-a110-11eb-8bc1-5219441d4bbd.png?width=1440&height=610)

## [1.0.0-beta.70](https://github.com/athensresearch/athens/compare/v1.0.0-beta.69...v1.0.0-beta.70) (2021-04-20)


### Bug Fixes

* Delete a block and "undo" cannot bring it back ([#991](https://github.com/athensresearch/athens/issues/991)) ([a7958fc](https://github.com/athensresearch/athens/commit/a7958fcfbfcb326cdaa16e6a0391dbd1a0a2dc65))
* **right-sidebar:** scroll to top if open another page on right ([#992](https://github.com/athensresearch/athens/issues/992)) ([4fff704](https://github.com/athensresearch/athens/commit/4fff7048c9a295f69be0debaa8a657f12961b573))


### Enhancements

* **db-picker:** Polish db dialog ([#993](https://github.com/athensresearch/athens/issues/993)) ([a104161](https://github.com/athensresearch/athens/commit/a10416180597bada4752229421427069637bb604))

## [1.0.0-beta.69](https://github.com/athensresearch/athens/compare/v1.0.0-beta.68...v1.0.0-beta.69) (2021-04-18)


### Features

* self-hosted real-time collab and presence ([#930](https://github.com/athensresearch/athens/issues/930)) ([8393c47](https://github.com/athensresearch/athens/commit/8393c4764d7866cf1fb8b2651c9bac8263077e7c))


### Bug Fixes

* expand the breadcrumb when [[link]], don't navigate ([#976](https://github.com/athensresearch/athens/issues/976)) ([2d3c086](https://github.com/athensresearch/athens/commit/2d3c08624340494040e268cce4ae0688fda16422))
* non-formatted breadcrumb on page block ([#972](https://github.com/athensresearch/athens/issues/972)) ([c875b3d](https://github.com/athensresearch/athens/commit/c875b3d6b02256e949c0e105388eff79849403cc)), closes [#970](https://github.com/athensresearch/athens/issues/970)


### Performance

* **athena:** debounce athena search ([#975](https://github.com/athensresearch/athens/issues/975)) ([0eef6e2](https://github.com/athensresearch/athens/commit/0eef6e234aa50c9c1d56a0f6c808006eb6093e5c))

## [1.0.0-beta.68](https://github.com/athensresearch/athens/compare/v1.0.0-beta.66...v1.0.0-beta.68) (2021-04-12)


### Bug Fixes

* add missing toolbar background color ([#941](https://github.com/athensresearch/athens/issues/941)) ([e17c2c1](https://github.com/athensresearch/athens/commit/e17c2c10842c40383dbccb6afca0005ea8c270f7))
* athena should stay within viewport bounds ([#943](https://github.com/athensresearch/athens/issues/943)) ([8593b58](https://github.com/athensresearch/athens/commit/8593b58dcf6b4511eb8ff1c5013d23e61a48548e))
* block ref count is above the search dropdown ([#940](https://github.com/athensresearch/athens/issues/940)) ([d94e5fd](https://github.com/athensresearch/athens/commit/d94e5fdcbfacbfb9327faec0a996cbe971d3544e))
* Checking a TODO item in block embed results to error ([#939](https://github.com/athensresearch/athens/issues/939)) ([dc393d4](https://github.com/athensresearch/athens/commit/dc393d45bb855e1e48c2bf34c8e0122f43dbf9ce))
* clearer checkbox checked style ([#942](https://github.com/athensresearch/athens/issues/942)) ([eec391c](https://github.com/athensresearch/athens/commit/eec391c9f64136007f57f6edc525587fe98bffb4))


### Documentation

* remove all docs ([#919](https://github.com/athensresearch/athens/issues/919)) ([b5f2887](https://github.com/athensresearch/athens/commit/b5f2887a3434c4a63a924cb6157a393939356752))


### Enhancements

* **settings:** redo settings page ([#931](https://github.com/athensresearch/athens/issues/931)) ([c1ebd70](https://github.com/athensresearch/athens/commit/c1ebd70156fb241fea6f564a01e874b660dc7800))

## [1.0.0-beta.67](https://github.com/athensresearch/athens/compare/v1.0.0-beta.66...v1.0.0-beta.67) (2021-04-11)


### Bug Fixes

* add missing toolbar background color ([#941](https://github.com/athensresearch/athens/issues/941)) ([e17c2c1](https://github.com/athensresearch/athens/commit/e17c2c10842c40383dbccb6afca0005ea8c270f7))
* athena should stay within viewport bounds ([#943](https://github.com/athensresearch/athens/issues/943)) ([8593b58](https://github.com/athensresearch/athens/commit/8593b58dcf6b4511eb8ff1c5013d23e61a48548e))
* block ref count is above the search dropdown ([#940](https://github.com/athensresearch/athens/issues/940)) ([d94e5fd](https://github.com/athensresearch/athens/commit/d94e5fdcbfacbfb9327faec0a996cbe971d3544e))
* Checking a TODO item in block embed results to error ([#939](https://github.com/athensresearch/athens/issues/939)) ([dc393d4](https://github.com/athensresearch/athens/commit/dc393d45bb855e1e48c2bf34c8e0122f43dbf9ce))
* fix-border-flash-on-new-block ([(#944)](https://github.com/athensresearch/athens/commit/67ab47fc161e9918d873aa370430e0e088c19b41))


### Documentation

* remove all docs ([#919](https://github.com/athensresearch/athens/issues/919)) ([b5f2887](https://github.com/athensresearch/athens/commit/b5f2887a3434c4a63a924cb6157a393939356752))

## [1.0.0-beta.66](https://github.com/athensresearch/athens/compare/v1.0.0-beta.65...v1.0.0-beta.66) (2021-04-07)


### Features

* import from Roam ([#918](https://github.com/athensresearch/athens/issues/918)) ([1a3ee32](https://github.com/athensresearch/athens/commit/1a3ee3205a9ddfed54c3f40705d9ec2daca22e5d))


### Documentation

* describe collapse/expand shortcut in Welcome ([#913](https://github.com/athensresearch/athens/issues/913)) ([0bc7bc3](https://github.com/athensresearch/athens/commit/0bc7bc30b3ed342b98b8724f6f77d1ba2c7402ec))

## [1.0.0-beta.65](https://github.com/athensresearch/athens/compare/v1.0.0-beta.64...v1.0.0-beta.65) (2021-04-06)


### Bug Fixes

* **10x:** ctrl/cmd-t always works to toggle 10x ([#907](https://github.com/athensresearch/athens/issues/907)) ([460fdbd](https://github.com/athensresearch/athens/commit/460fdbd017aafe04d82259e2f1edc455259a1d00))


* **db:** add Karma test for node search by title ([#903](https://github.com/athensresearch/athens/issues/903)) ([2876194](https://github.com/athensresearch/athens/commit/2876194a0c68da33f8dd0eadd3a5534f2b811148))
* **settings:** allow any user to opt-out; improve copy ([#908](https://github.com/athensresearch/athens/issues/908)) ([98a1fca](https://github.com/athensresearch/athens/commit/98a1fca13aed2bead6dd3ec9ee41d7c0078e0a53))

## [1.0.0-beta.64](https://github.com/athensresearch/athens/compare/v1.0.0-beta.63...v1.0.0-beta.64) (2021-04-02)


### Features

* **copy+paste:** respect h1/h2/h3 markdown ([#901](https://github.com/athensresearch/athens/issues/901)) ([a2bcef5](https://github.com/athensresearch/athens/commit/a2bcef5c0862dcc88af5ff73ad4b0f044ad2c1d6))

## [1.0.0-beta.63](https://github.com/athensresearch/athens/compare/v1.0.0-beta.62...v1.0.0-beta.63) (2021-04-01)


### Features

* **copy:** right-click to copy without formatting ([#897](https://github.com/athensresearch/athens/issues/897)) ([d994f66](https://github.com/athensresearch/athens/commit/d994f664032a0ac5e1643f1974a6504a8e2f9211))


* increase network request timeout ([#899](https://github.com/athensresearch/athens/issues/899)) ([a224c23](https://github.com/athensresearch/athens/commit/a224c23791f8d5b5f03507e8fac5917a34608130))

## [1.0.0-beta.62](https://github.com/athensresearch/athens/compare/v1.0.0-beta.61...v1.0.0-beta.62) (2021-04-01)


### Features

* **block-ref:** shift + "Drag'n'Drop" to copy block uid ([#876](https://github.com/athensresearch/athens/issues/876)) ([613b244](https://github.com/athensresearch/athens/commit/613b244a1ecc696d5fbd6e885f7e47f0c4e69ff4))


### Bug Fixes

* url to changelog ([#896](https://github.com/athensresearch/athens/issues/896)) ([241f1fd](https://github.com/athensresearch/athens/commit/241f1fdfa2d56726d3d87eb95193ffc9e9858858))
* **athena:** make sure element exists before scroll ([#877](https://github.com/athensresearch/athens/issues/877)) ([32ae526](https://github.com/athensresearch/athens/commit/32ae52623841ebd499f4106167c24535005e5f4a))
* catch all KaTeX errors ([#871](https://github.com/athensresearch/athens/issues/871)) ([e37a50c](https://github.com/athensresearch/athens/commit/e37a50cc436e108d9317160b835cb9a02d95844b))
* **parser:** parse some edge case URLs ([#838](https://github.com/athensresearch/athens/issues/838)) ([1d20057](https://github.com/athensresearch/athens/commit/1d200577f61702dc31a85f582be28899beaf7da2))

## [1.0.0-beta.61](https://github.com/athensresearch/athens/compare/v1.0.0-beta.60...v1.0.0-beta.61) (2021-03-25)


### Bug Fixes

* **parser:** parse multiple raw URLs in a single block ([#830](https://github.com/athensresearch/athens/issues/830)) ([92b766a](https://github.com/athensresearch/athens/commit/92b766a8628b95b0c136677b74d2df9fdcfaa042))
* toolbar overlaps on scrollbar ([#818](https://github.com/athensresearch/athens/issues/818)) ([8aa6790](https://github.com/athensresearch/athens/commit/8aa6790876cd31a85f4e7e02352d028620cba932))


### Documentation

* update download links ([#804](https://github.com/athensresearch/athens/issues/804)) ([1c4aa1a](https://github.com/athensresearch/athens/commit/1c4aa1ada5e325388bc874a7aeb023760ccad64a))

## [1.0.0-beta.60](https://github.com/athensresearch/athens/compare/v1.0.0-beta.59...v1.0.0-beta.60) (2021-03-13)


### Bug Fixes

* clicking the date doesn't open the date page ([#807](https://github.com/athensresearch/athens/issues/807)) ([9fc1a72](https://github.com/athensresearch/athens/commit/9fc1a72d7205b7bba4d4c95fb0887a8c36bf95ce)), closes [#802](https://github.com/athensresearch/athens/issues/802)
* toolbar overlaps on scrollbar ([#809](https://github.com/athensresearch/athens/issues/809)) ([2657478](https://github.com/athensresearch/athens/commit/2657478db5ef6d77b20085b6a8093c708c974033))


### Documentation

* add gitbook config ([7b2c8d7](https://github.com/athensresearch/athens/commit/7b2c8d74122243083fd837ecf344e6f5b45a6090))
* add more contributor faces ([9b7fdad](https://github.com/athensresearch/athens/commit/9b7fdada18f84e965fecdc1b7713bf78b519dbdc))


### Performance

* **undo/redo:** undo by transaction rather than entire db ([#808](https://github.com/athensresearch/athens/issues/808)) ([167804d](https://github.com/athensresearch/athens/commit/167804d07226c2909cc4d5cb8b383afce777bdf8))

## [1.0.0-beta.59](https://github.com/athensresearch/athens/compare/v1.0.0-beta.58...v1.0.0-beta.59) (2021-03-11)


### Bug Fixes

* **undo/redo:** textarea undo/redo; italics, highlight, underline, strikethrough [#717](https://github.com/athensresearch/athens/issues/717) ([#803](https://github.com/athensresearch/athens/issues/803)) ([2509b9a](https://github.com/athensresearch/athens/commit/2509b9a3cb63bea66f6b44cedf398d7b93dfe825))

## [1.0.0-beta.58](https://github.com/athensresearch/athens/compare/v1.0.0-beta.57...v1.0.0-beta.58) (2021-03-11)


### Bug Fixes

* **title:** shift-click on title should open in right sidebar ([#802](https://github.com/athensresearch/athens/issues/802)) ([a51e001](https://github.com/athensresearch/athens/commit/a51e001cd4543b389460b1def17446230f51062c)), closes [#775](https://github.com/athensresearch/athens/issues/775)
* Persistent Pop-up when scrolling ([#801](https://github.com/athensresearch/athens/issues/801)) ([ce4fe61](https://github.com/athensresearch/athens/commit/ce4fe61e1e73733e22367f1160456ce0829a9e8f))

## [1.0.0-beta.57](https://github.com/athensresearch/athens/compare/v1.0.0-beta.56...v1.0.0-beta.57) (2021-03-11)


### Bug Fixes

* **blocks:** links made clickable, z-index clean up [#772](https://github.com/athensresearch/athens/issues/772) ([#778](https://github.com/athensresearch/athens/issues/778)) ([8cabc5f](https://github.com/athensresearch/athens/commit/8cabc5fa38cdcf6624cb84b5826fbb17de628fea))
* **icons:** fix [#792](https://github.com/athensresearch/athens/issues/792) ([#795](https://github.com/athensresearch/athens/issues/795)) ([3c7368d](https://github.com/athensresearch/athens/commit/3c7368d4e18b21b24ab5fbfda29aa638934d4525))


* S3 -> GitHub release ([#799](https://github.com/athensresearch/athens/issues/799)) ([19ceb80](https://github.com/athensresearch/athens/commit/19ceb80cc713112573098cbaf10ae7dddcea5391))

## [1.0.0-beta.56](https://github.com/athensresearch/athens/compare/v1.0.0-beta.55...v1.0.0-beta.56) (2021-03-10)


### Bug Fixes

* **electron:** issue updating Mac (Intel, not Silicon) ([#796](https://github.com/athensresearch/athens/issues/796)) ([2037a83](https://github.com/athensresearch/athens/commit/2037a83ebf60ca53a1b96be653cd55e82c36d557)), closes [#749](https://github.com/athensresearch/athens/issues/749) [#793](https://github.com/athensresearch/athens/issues/793)


### Documentation

* update version number ([60390da](https://github.com/athensresearch/athens/commit/60390daea2ddba084c00ad78d65e6080c062d7ef))

## [1.0.0-beta.55](https://github.com/athensresearch/athens/compare/v1.0.0-beta.54...v1.0.0-beta.55) (2021-03-10)


### Documentation

* add directions on how to download a specific version of Athens ([6d6e7ac](https://github.com/athensresearch/athens/commit/6d6e7ac245837fef48c5578fdf382f1fd462cad6))

## [1.0.0-beta.54](https://github.com/athensresearch/athens/compare/v1.0.0-beta.53...v1.0.0-beta.54) (2021-03-10)


### Enhancements

* **linked-refs:** sort references by newest first ([#776](https://github.com/athensresearch/athens/issues/776)) ([954da17](https://github.com/athensresearch/athens/commit/954da17da57524fe55a4b25ea3c518a012f803c7))


### Performance

* **icons:** optimize size of material-ui/icons ([#790](https://github.com/athensresearch/athens/issues/790)) ([e60d92f](https://github.com/athensresearch/athens/commit/e60d92fb9d1235d205f868d91fbce6935617d254))

## [1.0.0-beta.53](https://github.com/athensresearch/athens/compare/v1.0.0-beta.52...v1.0.0-beta.53) (2021-03-09)


### Bug Fixes

* **block-ref:** better reference number ([#781](https://github.com/athensresearch/athens/issues/781)) ([1c75578](https://github.com/athensresearch/athens/commit/1c75578c8496725c5f7debbad20972c60ea24c97)), closes [#742](https://github.com/athensresearch/athens/issues/742)
* **electron:** issue updating Mac App ([#777](https://github.com/athensresearch/athens/issues/777)) ([cf259a1](https://github.com/athensresearch/athens/commit/cf259a1de5e98d44f4cf3c8525b793b54a131c72))
* **enter/tab:** do not apply changes to previous line when fast keystrokes ([#768](https://github.com/athensresearch/athens/issues/768)) ([f449fcb](https://github.com/athensresearch/athens/commit/f449fcb51821ef073b9f666677372863b4826c26))


### Documentation

* use gifs ([07dc655](https://github.com/athensresearch/athens/commit/07dc65528059d943531ab14d15e0ce5b53ed5819))

## [1.0.0-beta.52](https://github.com/athensresearch/athens/compare/v1.0.0-beta.51...v1.0.0-beta.52) (2021-03-09)


### Bug Fixes

* **clj-kondo:** upgrade CI, with-let, specter, remove #_:clj-kondo/ignore ([#769](https://github.com/athensresearch/athens/issues/769)) ([40dabd7](https://github.com/athensresearch/athens/commit/40dabd71998514b7368a8d73959b4e6e27f5cfd1))
* **web:** theme and graph conf issue [#773](https://github.com/athensresearch/athens/issues/773) ([#779](https://github.com/athensresearch/athens/issues/779)) ([8c42437](https://github.com/athensresearch/athens/commit/8c424372d9c5f8f15f54f3b9703b1d4196909e4c))
* unlinked reference overflowing content ([#770](https://github.com/athensresearch/athens/issues/770)) ([defc78d](https://github.com/athensresearch/athens/commit/defc78d3ddfa7faafc585f7e9203d5cdd5c70bb2))


### Documentation

* add download links for M1 ([6d33825](https://github.com/athensresearch/athens/commit/6d33825605ce0e09d4a5b37887c318bf6be1d96a))
* update screenshot url ([b76f45f](https://github.com/athensresearch/athens/commit/b76f45fe76fe89ba6a37764d369b23289cbaa582))
* **README:** update screenshots, add PH badge ([#774](https://github.com/athensresearch/athens/issues/774)) ([713b4a3](https://github.com/athensresearch/athens/commit/713b4a337b5716306a525d89e353311fa8cbcb7b))

## [1.0.0-beta.51](https://github.com/athensresearch/athens/compare/v1.0.0-beta.50...v1.0.0-beta.51) (2021-03-07)


### Features

* **graph:** local-graphs and view customization ([#767](https://github.com/athensresearch/athens/issues/767)) ([e015a04](https://github.com/athensresearch/athens/commit/e015a049f8a77f9e7f5d09638307d18fb27356ac))
* **toolbar:** add a "Load Test DB" button for web demo ([#764](https://github.com/athensresearch/athens/issues/764)) ([685117c](https://github.com/athensresearch/athens/commit/685117c0598e9ab8f58baf7ebfa938b67a003401))

## [1.0.0-beta.50](https://github.com/athensresearch/athens/compare/v1.0.0-beta.49...v1.0.0-beta.50) (2021-03-05)

### Chore

* update electron and electron-builder ~> darwin-arm64 for M1 Mac


### Bug Fixes

* **linked-refs/block-embed:** drag & drop multiple blocks ([#743](https://github.com/athensresearch/athens/issues/743)) ([6f7407d](https://github.com/athensresearch/athens/commit/6f7407d723a4d7638d65475a9ae2398326059166))

## [1.0.0-beta.49](https://github.com/athensresearch/athens/compare/v1.0.0-beta.48...v1.0.0-beta.49) (2021-03-04)


### Bug Fixes

* **electron:** Avoid race-condition with filesystem mtime ([#734](https://github.com/athensresearch/athens/issues/734)) ([fdc5bbf](https://github.com/athensresearch/athens/commit/fdc5bbf5a6c5556fc0a6d1933c00e9b1286a97d0))

## [1.0.0-beta.48](https://github.com/athensresearch/athens/compare/v1.0.0-beta.47...v1.0.0-beta.48) (2021-03-04)


### Bug Fixes

* **typo:**  package.json hiddren->hidden ([#725](https://github.com/athensresearch/athens/issues/725)) ([148d02e](https://github.com/athensresearch/athens/commit/148d02ebad8b5ac949ca47b39f4ec2c27937b1c1))


### Enhancements

* **auth:** have another cond in case networking or other error ([#721](https://github.com/athensresearch/athens/issues/721)) ([bdae4ec](https://github.com/athensresearch/athens/commit/bdae4ec56381f3d46619b17be2dc568e2d06b5c3))
* **graph:** clicking on node navigates to page ([#731](https://github.com/athensresearch/athens/issues/731)) ([94fbd64](https://github.com/athensresearch/athens/commit/94fbd64192b36726f68e5b366fd5c487af7d9c5e))
* **parser:** Add LaTeX support ([#726](https://github.com/athensresearch/athens/issues/726)) ([3a3fb1f](https://github.com/athensresearch/athens/commit/3a3fb1f28cad0038e3e11a4d7c5418233cb519d2))

## [1.0.0-beta.47](https://github.com/athensresearch/athens/compare/v1.0.0-beta.46...v1.0.0-beta.47) (2021-03-02)


### Features

* **block-embed:** block-embed and component refactor [#584](https://github.com/athensresearch/athens/issues/584) ([#719](https://github.com/athensresearch/athens/issues/719)) ([7b65099](https://github.com/athensresearch/athens/commit/7b65099a1116caad7d873791ddd294e52f068c1b))


### Bug Fixes

* **title:** Empty title and regex in block query ([#720](https://github.com/athensresearch/athens/issues/720)) ([785ee38](https://github.com/athensresearch/athens/commit/785ee3834b66315d56c865e5c10879a620f337b6))

## [1.0.0-beta.46](https://github.com/athensresearch/athens/compare/v1.0.0-beta.45...v1.0.0-beta.46) (2021-02-26)


### Performance

* use shadow-cljs release, improve job dependencies ([#704](https://github.com/athensresearch/athens/issues/704)) ([f6793d6](https://github.com/athensresearch/athens/commit/f6793d67df79f8d77b695b9f9a9c0e75a9e537db))

## [1.0.0-beta.45](https://github.com/athensresearch/athens/compare/v1.0.0-beta.44...v1.0.0-beta.45) (2021-02-26)


### Bug Fixes

* **electron:** make sure main-window exists before sending ([#699](https://github.com/athensresearch/athens/issues/699)) ([68eb2d8](https://github.com/athensresearch/athens/commit/68eb2d8e9364caf6392aa2edef91e19f4c12b903))


### Documentation

* added calva jack-in command for windows ([#701](https://github.com/athensresearch/athens/issues/701)) ([49dbddf](https://github.com/athensresearch/athens/commit/49dbddfe19bd0124fea12e472cd08238b7fc57b0))

## [1.0.0-beta.40](https://github.com/athensresearch/athens/compare/v1.0.0-beta.39...v1.0.0-beta.40) (2021-02-16)


### Features

* **graph-viz:** first pass ([#645](https://github.com/athensresearch/athens/issues/645)) ([e57f0ae](https://github.com/athensresearch/athens/commit/e57f0aed323ee8064b4cd92d7f9eac8a800dbede))


### Enhancements

* **analytics:** opt-out includes Sentry, don't capture info logs, global alert ([#652](https://github.com/athensresearch/athens/issues/652)) ([4964c76](https://github.com/athensresearch/athens/commit/4964c765bb4ef3f269ec94cd09e63ab3d515cca1))
* **analytics:** track opt-in/opt-out ([#654](https://github.com/athensresearch/athens/issues/654)) ([24cdc04](https://github.com/athensresearch/athens/commit/24cdc04f798770827102beef1703e7fb18895dc2))

## [1.0.0-beta.39](https://github.com/athensresearch/athens/compare/v1.0.0-beta.38...v1.0.0-beta.39) (2021-02-14)


### Bug Fixes

* **keybindings:** partial solution to [#573](https://github.com/athensresearch/athens/issues/573) ([#578](https://github.com/athensresearch/athens/issues/578)) ([c33f283](https://github.com/athensresearch/athens/commit/c33f283963bc7bb02e5163884e9c97a97c7c4c0f))
* **parser:** parse bare urls [#549](https://github.com/athensresearch/athens/issues/549) ([#636](https://github.com/athensresearch/athens/issues/636)) ([c0dfa79](https://github.com/athensresearch/athens/commit/c0dfa797085b25598c5f27ca1e53c89d4ba45215))
* [#635](https://github.com/athensresearch/athens/issues/635), only open in right sidebar on SHIFT-click ([#637](https://github.com/athensresearch/athens/issues/637)) ([f6b88b5](https://github.com/athensresearch/athens/commit/f6b88b5e6ddcc319f7d083c938b9a9a9cff7efd8))
* linked reference should show the formatting ([#634](https://github.com/athensresearch/athens/issues/634)) ([d5b1241](https://github.com/athensresearch/athens/commit/d5b12419b9eb43965d799ae38872653e6d4c6491))
