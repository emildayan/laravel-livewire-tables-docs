---
title: Commands
menuTitle: 'Commands'
description: ''
position: 3
category: 'GETTING STARTED'
---

<alert type="info">This feature is available in v1.12 and above</alert>

### Generating Datatable Components

To generate a new datatable component you can use the `make:datatable` command:

Create a new datatable component called UserTable in App\Http\Livewire
```
php artisan make:datatable UserTable
```

Create a new datatable component called UserTable in App\Http\Livewire that uses the App\Models\User model.
```
php artisan make:datatable UserTable User
```

Create a new datatable component called UserTable in App\Http\Livewire that uses the App\Models\User model and has a custom row view stub included.
```
php artisan make:datatable UserTable User --view
```
