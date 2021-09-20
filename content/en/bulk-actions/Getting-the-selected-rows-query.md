---
title: Getting the selected rows query
menuTitle: 'Selected rows query'
description: ''
position: 22
category: 'Bulk Actions'
fullscreen: true
---

In the component, you have access to `$this->selectedRowsQuery` which is a Builder instance of the selected rows.

```php
public function exportSelected()
{
    if ($this->selectedRowsQuery->count() > 0) {
        // Do something with the selected rows
    }

    // Notify there is nothing to export
}
```

See also [Getting the selected keys](bulk-actions/Getting-the-selected-keys) if you would just like access to the selected primary keys.
