document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const body = document.body;
    const langToggleBtn = document.getElementById('lang-toggle');
const elementsToTranslate = {
    "header-name": { en: "Zhelyo Bodurov", bg: "Жельо Бодуров" },
    "nav-about": { en: "About", bg: "За мен" },
    "nav-experience": { en: "Experience", bg: "Опит" },
    "nav-education": { en: "Education", bg: "Образование" },
    "nav-contact": { en: "Contact", bg: "Контакт" },
    "about-title": { en: "About Me", bg: "За мен" },
    "about-birthdate": { en: "Birth date: 23.04.1992", bg: "Дата на раждане: 23.04.1992" },
    "about-gender": { en: "Gender: Male", bg: "Пол: Мъж" },
    "about-languages": { en: "Languages: Bulgarian (Native), English (Fluent)", bg: "Езици: Български (Роден), Английски (Свободно)" },
    "about-skills": { en: "Computer Skills: Microsoft Access, WordPress, Fundamental C# skills, Basic JavaScript skills, SQL, HTML", bg: "Компютърни умения: Microsoft Access, WordPress, Основни умения по C#, Основни умения по JavaScript, SQL, HTML" },
    "github-link": { en: "GitHub", bg: "GitHub" },
    "about-driving": { en: "Driving License, category: B, C", bg: "Шофьорска книжка, категория: B, C" },
    "experience-title": { en: "Work Experience", bg: "Професионален Опит" },
    "job-title-siteground": { en: "Customer/Technical Support at SiteGround", bg: "Клиентска/Техническа поддръжка в SiteGround" },
    "job-location-siteground": { en: "Stara Zagora, Business sector: Information Technologies", bg: "Стара Загора, Сектор: Информационни технологии" },
    "job-description1-siteground": { en: "Customer and technical support, WordPress, Joomla, Laravel", bg: "Клиентска и техническа поддръжка, WordPress, Joomla, Laravel" },
    "job-description2-siteground": { en: "Troubleshooting DNS domain issues", bg: "Отстраняване на проблеми с DNS домейни" },
    "job-description3-siteground": { en: "Resolving application performance inquiries", bg: "Разрешаване на проблеми с производителността на приложения" },
    "job-description4-siteground": { en: "SSH", bg: "SSH" },
    "job-duration-siteground": { en: "March 2023 - Present", bg: "Март 2023 - До момента" },
    "job-title-crypto": { en: "Customer Support at Crypto.com", bg: "Клиентска поддръжка в Crypto.com" },
    "job-location-crypto": { en: "Stara Zagora, Business sector: Cryptocurrency and Blockchain Technology", bg: "Стара Загора, Сектор: Криптовалути и Блокчейн технологии" },
    "job-description1-crypto": { en: "Compliance and Verification", bg: "Спазване на регулации и проверка" },
    "job-description2-crypto": { en: "Transaction Assistance", bg: "Помощ при транзакции" },
    "job-description3-crypto": { en: "Security Assurance", bg: "Осигуряване на сигурността" },
    "job-duration-crypto": { en: "January 2022 - March 2023", bg: "Януари 2022 - Март 2023" },
    "job-title-radio": { en: "Radio Operator/Signaller at Bulgarian Air Force", bg: "Радиооператор/Сигналист в Българските ВВС" },
    "job-location-radio": { en: "Communication Management: Operate radios, manage channels, relay information.", bg: "Управление на комуникациите: Управление на радиа, управление на канали, предаване на информация." },
    "job-description1-radio": { en: "Signal Intelligence: Intercept signals, monitor communications.", bg: "Сигнална разузнавателна информация: Перехващане на сигнали, наблюдение на комуникации." },
    "job-description2-radio": { en: "Equipment Maintenance: Inspect, repair, and maintain radio systems.", bg: "Поддръжка на оборудване: Инспекция, ремонт и поддръжка на радио системи." },
    "job-description3-radio": { en: "Documentation: Log communications, report activities.", bg: "Документация: Водене на записи за комуникации, докладване на дейности." },
    "job-duration-radio": { en: "June 2019 - January 2022", bg: "Юни 2019 - Януари 2022" },
    "job-title-cleaning": { en: "Customer Service/Logistics Management at CleanDay", bg: "Клиентска услуга/Логистично управление в CleanDay" },
    "job-location-cleaning": { en: "London, Business sector: Cleaning Services", bg: "Лондон, Сектор: Услуги по почистване" },
    "job-description1-cleaning": { en: "Customer Service: Handle inquiries, manage bookings, resolve client issues.", bg: "Клиентска услуга: Обработка на запитвания, управление на резервации, разрешаване на клиентски проблеми." },
    "job-description2-cleaning": { en: "Logistics Management: Schedule cleanings, allocate resources, optimize service routes.", bg: "Логистично управление: Планиране на почиствания, разпределение на ресурси, оптимизация на маршрутите." },
    "job-description3-cleaning": { en: "Team Coordination: Assign tasks, monitor job progress, ensure quality control.", bg: "Координация на екипа: Разпределение на задачи, наблюдение на напредъка, осигуряване на качествен контрол." },
    "job-description4-cleaning": { en: "Client Satisfaction: Gather feedback, address complaints, implement service improvements.", bg: "Удовлетвореност на клиентите: Събиране на обратна връзка, разрешаване на оплаквания, прилагане на подобрения в услугите." },
    "job-description5-cleaning": { en: "Operational Efficiency: Streamline processes, manage supply inventory, minimize downtime.", bg: "Оперативна ефективност: Оптимизиране на процесите, управление на инвентара, минимизиране на престой." },
    "footer-text": { en: "© 2024 Zhelyo Bodurov. All rights reserved.", bg: "© 2024 Жельо Бодуров. Всички права запазени." },
    "phone": { en: "Phone: 0899946802", bg: "Телефон: 0899946802" },
    "linkedin-link": { en: "LinkedIn", bg: "LinkedIn" },
     "education-title": { en: "Education", bg: "Образование" },
        "education-program": { 
            en: "Software Technologies and Design at Plovdiv University \"Paisii Hilendarski\"", 
            bg: "Софтуерни технологии и дизайн в Пловдивски университет \"Паисий Хилендарски\"" 
        },
        "education-location": { en: "Plovdiv, Bulgaria", bg: "Пловдив, България" },
        "education-degree": { en: "Bachelor's degree", bg: "Бакалавърска степен" },
        "education-duration": { en: "September 2020 - Present", bg: "Септември 2020 - До момента" }
};

    // Function to hide loader and show content
    const hideLoader = () => {
        loader.style.display = "none";
        body.classList.add("fade-in");
    };

    // Hide loader after a short delay
    setTimeout(hideLoader, 1000); // 1 second delay

    // Get current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('language') || 'en';

    // Function to update elements with the current language
    const updateLanguage = () => {
        Object.keys(elementsToTranslate).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elementsToTranslate[id][currentLang];
            }
        });
        // Update toggle button text
        langToggleBtn.textContent = currentLang === 'bg' ? 'ENG' : 'BG';
    };

    // Function to switch language
    const switchLanguage = () => {
        currentLang = currentLang === 'en' ? 'bg' : 'en';
        localStorage.setItem('language', currentLang); // Save the selected language
        updateLanguage();
    };

    // Add an event listener to the language toggle button
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', switchLanguage);
    }

    // Set initial language content
    updateLanguage(); // Initializes with saved or default language

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const formMessage = document.getElementById('formMessage');

        // Send form data using Fetch API
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            formMessage.textContent = data;
            formMessage.style.color = data.includes("successfully") ? '#78cf50' : '#F2522E';
            
            // If the message is successful, display it and then fade out
            if (data.includes("successfully")) {
                formMessage.style.opacity = '1'; // Ensure message is fully visible
                contactForm.reset();

                // After 3 seconds, fade out the message and scroll to top
                setTimeout(() => {
                    formMessage.style.transition = 'opacity 1s ease-out';
                    formMessage.style.opacity = '0'; // Start fading out

                    // Scroll to the top once the fade-out starts
                    setTimeout(() => {
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera

                        // Reset formMessage content and styles after fade out
                        setTimeout(() => {
                            formMessage.textContent = '';
                            formMessage.style.opacity = '';
                            formMessage.style.transition = '';
                        }, 1000); // Wait for fade-out transition to complete
                    }, 1000); // Wait for message fade-out to start
                }, 3000); // 3 seconds delay before starting fade out
            }
        })
        .catch(() => {
            formMessage.textContent = 'An error occurred. Please try again.';
            formMessage.style.color = '#F2522E'; // Error color
        });
    });
}


    // Handle flip card click events
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Scroll to Top Button functionality
    const myButton = document.getElementById("myBtn");

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    };

    // Scroll to the top when the user clicks the button
    myButton.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});
