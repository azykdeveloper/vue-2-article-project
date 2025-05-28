const persistenceStorage = {
  // Ma'lumotni saqlash
  setItem(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("LocalStorage-ga yozishda xatolik:", error);
    }
  },

  // Ma'lumotni olish
  getItem(key) {
    try {
      const serializedValue = window.localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error("LocalStorage-dan o'qishda xatolik:", error);
      return null;
    }
  },

  // Ma'lumotni o'chirish
  removeItem(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error("LocalStorage-dan o'chirishda xatolik:", error);
    }
  },
};

export default persistenceStorage;
