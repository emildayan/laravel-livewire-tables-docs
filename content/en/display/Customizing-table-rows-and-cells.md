---
title: Customizing table rows and cells
menuTitle: 'Rows & Cells'
description: ''
position: 53
category: 'Display'
fullscreen: true
---

<alert>This feature is available in v1.8 and above</alert>

Sometimes you may wish to alter a row or cell depending on the contents within it. You have access to these class methods to hook into rendering of these rows and cells:

You do not need to define these methods if you are not going to use them.

`$row` is an instance of the current iteration of your Eloquent collection.

```php
public function setTableRowClass($row): ?string
{
    return null;
}
```

```php
public function setTableRowId($row): ?string
{
    return null;
}
```

```php
public function setTableRowAttributes($row): array
{
    return [];
}
```

```php
public function setTableDataClass(Column $column, $row): ?string
{
    return null;
}
```

```php
public function setTableDataId(Column $column, $row): ?string
{
    return null;
}
```

```php
public function setTableDataAttributes(Column $column, $row): array
{
    return [];
}
```

<alert type='warning'>Table cell formatting will not work if you are using a custom row view, you must implement it yourself.</alert>

<alert>The following footer methods are only available in v1.16 and above</alert>

<alert>**Note:** Footer row methods receive a collection of the rows on the given page. A good example would be setting the background color of a cell depending on the sum of a column.</alert>

```php
public function setFooterRowClass($rows): ?string
{
    return null;
}
```

```php
public function setFooterRowId($rows): ?string
{
    return null;
}
```

```php
public function setFooterRowAttributes($rows): array
{
    return [];
}
```

```php
public function setFooterDataClass(Column $column, $rows): ?string
{
    return null;
}
```

```php
public function setFooterDataId(Column $column, $rows): ?string
{
    return null;
}
```

```php
public function setFooterDataAttributes(Column $column, $rows): array
{
    return [];
}
```

## Examples:

```php
public function setTableRowClass($row): ?string
{
    return $row->isSuccess() ? 'bg-green-500' : null;
}
```

```php
public function setTableRowId($row): ?string
{
    return 'row-' . $row->id;
}
```

```php
public function setTableRowAttributes($row): array
{
    return $row->hasFailed() ? ['this' => 'that'] : [];
}
```

```php
public function setTableDataClass(Column $column, $row): ?string
{
    if ($column->column() === 'email' && ! $row->isVerified()) {
        return 'text-danger';
    }

    return null;
}
```

```php
public function setTableDataId(Column $column, $row): ?string
{
    if ($column->column() === 'email') {
        return 'user-email-' . $row->id;
    }

    return null;
}
```

```php
public function setTableDataAttributes(Column $column, $row): array
{
    if ($column->column() === 'email' && ! $row->isVerified()) {
        return ['this' => 'that'];
    }

    return [];
}
```

<alert>The footer methods follow the same principals but, here's an example on modifying the cell based on the sum of some data in the table.</alert>

```php
public function setFooterDataClass(Column $column, $rows): ?string
{
    if ($column->column() === 'sales' && ! $rows->sum('sales') > 1000) {
        return 'bg-green-500 text-green-800';
    }

    return null;
}
```