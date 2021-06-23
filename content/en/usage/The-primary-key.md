---
title: The Primary Key
description: ''
position: 4
category: 'Usage'
fullscreen: true
---

When dealing with bulk actions or drag & drop, every row must have a primary key. By default, it will use `id`. But if you have something other than that such as `uuid` then you can use the `$primaryKey` property.

```php
public string $primaryKey = 'uuid';
```
