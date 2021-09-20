---
title: Misc. Column Functionality
menuTitle: 'Misc. Functionality'
description: ''
position: 11
category: 'Columns'
fullscreen: true
---

## Adding a class to the column headers

```php
Column::make('Other')
    ->addClass('hidden md:table-cell'), // Hide this header on mobile
```

## Adding any attribute to the column headers

```php
Column::make('Other')
    ->addAttributes(['data-toggle' => 'tooltip', 'data-placement' => 'top', 'title' => 'Tooltip on top']),
```
