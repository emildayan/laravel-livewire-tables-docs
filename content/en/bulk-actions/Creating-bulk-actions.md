---
title: Creating bulk actions
description: ''
position: 21
category: 'Bulk Actions'
fullscreen: true
---

To create bulk actions, you must specify a `method` and a `button title` in the `$bulkActions` component property.

```php
public array $bulkActions = [
    'exportSelected' => 'Export',
];
```

The **key** is the Livewire method to call, and the value is the name of the item in the bulk actions dropdown.

You can define your method to do whatever you want:

```php
public function exportSelected()
{
    // Do something with the selected rows.
}
```

See [Getting the selected rows query](bulk-actions/Getting-the-selected-rows-query) or [Getting the selected keys](bulk-actions/Getting-the-selected-keys) to understand how to work with the selected data.
