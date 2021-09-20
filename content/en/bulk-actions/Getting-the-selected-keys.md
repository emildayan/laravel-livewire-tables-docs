---
title: Getting the selected keys
menuTitle: 'Selected keys'
description: ''
position: 23
category: 'Bulk Actions'
fullscreen: true
---

If you would like access to just the selected primary keys in your bulk action method, you may use the `selectedKeys` property which return an array of the selected primary keys:

```php
public function exportSelected()
{
    if (count($this->selectedKeys)) {
        // Do something with the selected rows
        dd($this->selectedKeys);
        
//        => [
//            1,
//            2,
//            3,
//            4,
//        ]   
    }

    // Notify there is nothing to export
}
```

**Note:** See [The primary key](usage/The-primary-key) about where this value comes from.
