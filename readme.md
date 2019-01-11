### Nova Items Field

[![Latest Version on Github](https://img.shields.io/github/release/dillingham/nova-items-field.svg?style=flat-square)](https://packagist.org/packages/dillingham/nova-items-field)
[![Total Downloads](https://img.shields.io/packagist/dt/dillingham/nova-items-field.svg?style=flat-square)](https://packagist.org/packages/dillingham/nova-items-field)


Simple Nova field for flat array inputs

![laravel-nova-array-input-field](https://user-images.githubusercontent.com/29180903/51056356-99300800-15b0-11e9-8084-3c2df5655dc2.png)

### Installation
```
composer require dillingham/nova-items-field
```

### Usage

```php
use NovaItemsField\Items;
```
```php
Items::make('Emails')->values($this->emails),
```

### Methods 

| function | description | required | default |
| - | - | - | - |
| **values(array)** | add a model's array | Yes | -- |
| **inputType(text)** | text, date, etc | No | "text" |
| **fullWidth(boolean)** | increase size of field | No | false |
| **placeholder(text)** | the new item input text | No | "Add a new item" |
| **listFirst()**| move form after the list  | No | false |
| **deleteButtonValue(html)** | value for delete button | No | "x" |
| **createButtonValue(html)** | value for create button | No | "Add" |

### Validation

```php

Items::make('Emails')->rules([
    'emails.*' => 'email|min:10',
]),
```

### Sidenotes


Be sure to cast `emails` to an array in your eloquent model.

```php
public $casts = [
    'emails' => 'array'
];
```

**Don't want to store the array?**

Use the array as a temporary variable

- make an [observer](https://nova.laravel.com/docs/1.0/resources/#resource-events)
- handle the array manually.
- unset the array to avoid sql error

```php

function saving($user)
{
    foreach($user->emails as $email)
    {
        //
    }
    
    unset($user->emails);
}
```

### Feature Todo

- [ ] Sortable / draggable items
