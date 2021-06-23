---
title: Working with modals
menuTitle: 'Modals'
description: ''
position: 54
category: 'Display'
fullscreen: true
---

<alert>This feature is available in v1.8 and above</alert>
The package itself does not provide any modal functionality, but it does give you a placeholder view to put your modal code in the context of the table component. This way you can control the visibility of your modal from the table component instead of having to wrap it in a parent component.

You can load your modal code using this component method:

```php
public function modalsView(): string
{
    return 'table.includes.modals';
}
```

Use the path to your view in your system.

The HTML will be placed right after the table.
