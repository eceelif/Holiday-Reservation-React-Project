// LocalStorageHelper.js

// Fonksiyonlarımızı bir modül olarak oluşturuyoruz

// Bilgileri yerel depolama kaydetmek için
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Yerel depodan bilgiyi almak için
export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

// Yerel depodan belirli bir anahtarı kaldırmak için
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};
