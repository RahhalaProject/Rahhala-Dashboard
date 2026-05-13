const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'assets', 'i18n');

const portalEn = {
    breadcrumb: {
        home: 'Home',
        orders: 'Orders',
    },
    login: {
        title: 'Rahhala login',
        placeholderEmail: 'you@example.com',
        emailRequired: 'Email is required',
        emailInvalid: 'Enter a valid email',
        loginFailed: 'Login failed. Please try again.',
    },
    configurator: {
        settings: 'Settings',
        primary: 'Primary',
        surface: 'Surface',
        presets: 'Presets',
        light: 'Light',
        dark: 'Dark',
        colorScheme: 'Color Scheme',
        menuType: 'Menu Type',
        menuTheme: 'Menu Theme',
        static: 'Static',
        overlay: 'Overlay',
        slim: 'Slim',
        slimPlus: 'Slim+',
        reveal: 'Reveal',
        drawer: 'Drawer',
        horizontal: 'Horizontal',
        menuThemeColorScheme: 'Color Scheme',
        menuThemePrimaryColor: 'Primary Color',
        menuThemeTransparent: 'Transparent',
    },
    profile: {
        welcome: 'Welcome',
        guest: 'Guest',
        profileSettings: 'Profile settings',
        signOut: 'Sign Out',
    },
    layout: {
        languageAria: 'Language',
        searchPlaceholder: 'Search',
        openProfileMenu: 'Open profile menu',
    },
};

const portalAr = {
    breadcrumb: {
        home: 'الرئيسية',
        orders: 'الطلبات',
    },
    login: {
        title: 'تسجيل الدخول — الرحالة',
        placeholderEmail: 'you@example.com',
        emailRequired: 'البريد الإلكتروني مطلوب',
        emailInvalid: 'أدخل بريداً إلكترونياً صالحاً',
        loginFailed: 'فشل تسجيل الدخول. حاول مرة أخرى.',
    },
    configurator: {
        settings: 'الإعدادات',
        primary: 'اللون الأساسي',
        surface: 'لون السطح',
        presets: 'القوالب',
        light: 'فاتح',
        dark: 'داكن',
        colorScheme: 'نظام الألوان',
        menuType: 'نوع القائمة',
        menuTheme: 'مظهر القائمة',
        static: 'ثابت',
        overlay: 'طفو',
        slim: 'رفيع',
        slimPlus: 'رفيع+',
        reveal: 'كشف',
        drawer: 'درج',
        horizontal: 'أفقي',
        menuThemeColorScheme: 'نظام الألوان',
        menuThemePrimaryColor: 'اللون الأساسي',
        menuThemeTransparent: 'شفاف',
    },
    profile: {
        welcome: 'مرحباً',
        guest: 'زائر',
        profileSettings: 'إعدادات الملف الشخصي',
        signOut: 'تسجيل الخروج',
    },
    layout: {
        languageAria: 'اللغة',
        searchPlaceholder: 'بحث',
        openProfileMenu: 'فتح قائمة الملف الشخصي',
    },
};

function merge(file, portal) {
    const p = path.join(dir, file);
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    j.portal = portal;
    fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n', 'utf8');
}

merge('en.json', portalEn);
merge('ar.json', portalAr);
console.log('Merged portal.* into en.json and ar.json');
