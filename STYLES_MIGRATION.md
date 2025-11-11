
# 🎨 Міграція стилів з inline на CSS Modules

## ✅ Що вже готово:

- ✅ `HomePage.tsx` - повністю на CSS Modules
- ✅ `Navigation.tsx` - повністю на CSS Modules
- ✅ Створено спільні стилі: `Examples.module.css` та `shared.module.css`

## 📋 Компоненти що потребують міграції:

- [ ] `ActionFormExample.tsx`
- [ ] `OptimisticExample.tsx`
- [ ] `UseHookExample.tsx`
- [ ] `FormStatusExample.tsx`
- [ ] `RefExample.tsx`
- [ ] `MetadataExample.tsx`
- [ ] `FinalFormComparison.tsx`

---

## 🔧 Як мігрувати компонент:

### Крок 1: Додати імпорт CSS модуля

```tsx
// Додай на початку файлу
import styles from './Examples.module.css';
```

### Крок 2: Замінити inline стилі на className

**Було (inline стилі):**
```tsx
<div style={styles.container}>
  <h2 style={styles.title}>Заголовок</h2>
</div>
```

**Стало (CSS Modules):**
```tsx
<div className={styles.container}>
  <h2 className={styles.title}>Заголовок</h2>
</div>
```

### Крок 3: Для комбінації класів

```tsx
// Комбінація класів
<button 
  className={`${styles.button} ${isPending ? styles.buttonDisabled : ''}`}
>
  Submit
</button>
```

### Крок 4: Видалити об'єкт стилів внизу файлу

```tsx
// Видали весь блок:
// const styles = {
//   container: { ... },
//   title: { ... },
//   ...
// } as const;
```

---

## 📚 Доступні класи в Examples.module.css:

### Контейнери:
- `.container` - стандартний контейнер (max-width: 900px)
- `.containerWide` - широкий контейнер (max-width: 1200px)

### Заголовки:
- `.title` - головний заголовок (32px)
- `.sectionTitle` - заголовок секції (20px)
- `.description` - опис з синьою лівою границею

### Форми:
- `.form` - контейнер форми
- `.formGroup` - група полів форми
- `.label` - лейбл поля
- `.input` - текстове поле
- `.textarea` - текстова область

### Кнопки:
- `.button` - основна кнопка
- `.buttonDisabled` - відключена кнопка (використовуй з .button)

### Повідомлення:
- `.message` - базовий стиль
- `.messageSuccess` - успішне повідомлення (зелене)
- `.messageError` - помилка (червоне)

### Інше:
- `.code` - блок коду
- `.comparison` - секція порівняння
- `.comparisonGrid` - сітка 1:1 для порівняння
- `.comparisonItem` - елемент порівняння
- `.benefits` - секція з перевагами (зелений фон)
- `.explanation` - пояснення (жовтий фон)
- `.list` - стилізований список

---

## 💡 Приклад повної міграції:

### Було:

```tsx
export const ActionFormExample = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>⚡ Actions</h2>
      <p style={styles.description}>Опис...</p>
      
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Ім'я:</label>
          <input style={styles.input} />
        </div>
        <button style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '20px', ... },
  title: { fontSize: '32px', ... },
  ...
} as const;
```

### Стало:

```tsx
import styles from './Examples.module.css';

export const ActionFormExample = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>⚡ Actions</h2>
      <p className={styles.description}>Опис...</p>
      
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Ім'я:</label>
          <input className={styles.input} />
        </div>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Видалено об'єкт styles!
```

---

## 🎯 Швидкий пошук та заміна (VS Code):

1. Відкрити пошук: `Cmd+F` (Mac) або `Ctrl+F` (Windows)
2. Включити regex: клікни на `.*` в полі пошуку
3. Знайти: `style=\{styles\.`
4. Замінити на: `className={styles.`
5. Замінити всі в файлі

**Увага:** Після автозаміни перевір:
- Комбіновані стилі (де `...styles.button, ...styles.active`)
- Динамічні стилі (де використовується логіка)

---

## ⚠️ Специфічні стилі:

Якщо компонент має унікальні стилі, яких немає в `Examples.module.css`:

### Варіант 1: Додати в Examples.module.css
```css
/* Додай нові класи */
.myUniqueClass {
  /* styles */
}
```

### Варіант 2: Створити окремий CSS модуль
```
src/components/ActionFormExample.module.css
```

---

## 🚀 Автоматизація (опціонально):

Створи скрипт для автоматичної заміни:

```bash
# find-and-replace.sh
#!/bin/bash

for file in src/components/*Example.tsx; do
  sed -i '' 's/style={styles\./className={styles./g' "$file"
  echo "Processed $file"
done
```

---

## ✅ Переваги після міграції:

- 📦 Менший розмір JS бандлу (стилі окремо)
- 🎨 Простіше редагувати стилі
- 🔄 Переісвикористання стилів між компонентами
- 🧹 Чистіший код компонентів
- 🎯 Автодоповнення className в IDE

---

Потрібна допомога? Питай! 😊

