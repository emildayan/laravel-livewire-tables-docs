---
title: Clickable Rows
description: ''
position: 14
category: 'Row'
fullscreen: true
---

If you would like to make the whole row clickable, you may use the `getTableRowUrl` method:

```php
public function getTableRowUrl($row): string
{
    return route('my.edit.route', $row);
}
```

It will be passed the current model as `$row`.

**Note:** When you have a clickable row, you might have issues with other clickable items in your cells following the row URL instead of the items action. As of right now I'd advise against using both until there is a better solution.