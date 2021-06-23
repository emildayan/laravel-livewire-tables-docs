---
title: Troubleshooting
description: ''
position: 6
category: 'Usage'
fullscreen: true
---

If you are having unexpected results, try these before making an issue or discussion:

## 1. Delete your `resources/views/vendor/livewire-tables` folder if you have one and see if the issue persists with the vendor views.

## 2. Clear everything:

```shell
php artisan clear-compiled &&
php artisan cache:clear &&
php artisan route:clear &&
php artisan view:clear &&
php artisan config:clear &&
composer dumpautoload -o
```

If you are still having the issue, proceed to make a discussion or issue request if you know the exact problem. Or even more helpful, make a pull request fixing the issue if you can.
