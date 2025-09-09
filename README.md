# Easy Cart

A simple shopping cart web app built with **HTML, CSS, and JavaScript**.  
All data is stored in your browser’s **localStorage**.  

🌐 Demo: [https://burninghoryd.github.io/easy-cart-local/](https://burninghoryd.github.io/easy-cart-local/)

---

## Features

- 🛒 Add and manage **items** (e.g., milk, eggs, bananas)  
- 🏬 Create and edit **markets** (stores or categories)  
- ✅ Check/uncheck items (done vs. to-buy)  
- 🏷️ Filter by specific market or view all markets  
- 🛍️ **Shopping Mode** toggle → show only unchecked items  
- 💾 Data is saved automatically to **localStorage** and stays in the same browser  
- 📤 Export / 📥 Import your data as JSON file  

---

## Usage

1. Open the app via GitHub Pages:  
   👉 [https://burninghoryd.github.io/easy-cart-local/](https://burninghoryd.github.io/easy-cart-local/)

2. On the main screen (`index.html`):
   - Select a market or “All Markets”
   - Toggle **Shopping Mode** if you want to see only unchecked items
   - Click **Edit** to manage markets and items

3. On the edit screen (`edit.html`):
   - Add / rename / delete markets
   - Add new items (comma-separated)
   - Assign items to one or multiple markets
   - Export/Import JSON for backup or sharing

---

## Tech Stack

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- No frameworks, no dependencies
- Storage: Browser **localStorage**

---

## Notes

- Data is stored **only in the current browser**.  
  Clearing cache or switching devices/browsers will reset the cart.  
- To back up your data, use the **Export** feature and save the JSON file.  
- Works on both desktop and mobile browsers.  

---

## License

MIT License © 2025 Horyd Burning
