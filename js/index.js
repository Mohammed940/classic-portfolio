// Tab Navigation System
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.getElementById('click');
    const nav = document.querySelector('nav');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Show the selected tab content
            const targetTab = this.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Close mobile menu when tab is clicked (for mobile devices)
            if (window.innerWidth <= 768 && menuToggle && nav) {
                menuToggle.checked = false;
                nav.style.left = '-100%';
            }
        });
    });
});

// Mobile menu toggle (existing functionality)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('click');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                nav.style.left = '0';
            } else {
                nav.style.left = '-100%';
            }
        });
    }
});

// CV Download Function
function openCV() {
    // Open CV in a new window/tab
    window.open('cv.pdf', '_blank');
}

// Function to show project details
function showProjectDetails(projectType) {
    const projectDetails = {
        medical: {
            title: "تطبيق الحجوزات الطبية",
            description: "تطبيق أندرويد متطور لحجز المواعيد الطبية يوفر تجربة سلسة للمرضى والأطباء.",
            features: [
                "حجز المواعيد الطبية بسهولة",
                "لوحة تحكم للأطباء لإدارة المواعيد",
                "نظام إشعارات ذكي",
                "تقييم الأطباء والعيادات",
                "سجل طبي إلكتروني",
                "نظام دفع آمن",
                "تصميم متجاوب وسهل الاستخدام"
            ],
            technologies: "Flutter, Dart, Firebase, PHP, MySQL"
        },
        travel: {
            title: "تطبيق حجز الرحلات",
            description: "منصة شاملة لحجز الرحلات السياحية مع خيارات متنوعة ونظام دفع متقدم.",
            features: [
                "البحث عن الرحلات حسب الوجهة والتاريخ",
                "حجز الفنادق والطيران",
                "نظام دفع آمن ومتعدد الطرق",
                "لوحة تحكم إدارية متقدمة",
                "تتبع الحجوزات في الوقت الفعلي",
                "نظام تقييم وتعليقات",
                "عروض وخصومات خاصة"
            ],
            technologies: "Flutter, Dart, Node.js, MongoDB, Stripe API"
        },
        car: {
            title: "تطبيق استئجار السيارات",
            description: "منصة متطورة لاستئجار السيارات مع نظام حجز فوري ودفع آمن.",
            features: [
                "عرض السيارات المتاحة مع الصور والمواصفات",
                "حجز فوري مع تأكيد سريع",
                "نظام دفع آمن ومتعدد الخيارات",
                "تتبع GPS للسيارات",
                "لوحة تحكم لمالكي السيارات",
                "نظام تقييم المستأجرين والمؤجرين",
                "إدارة العقود والفواتير"
            ],
            technologies: "Flutter, Dart, Laravel, MySQL, Google Maps API"
        },
        ecommerce: {
            title: "متجر إلكتروني",
            description: "موقع متجر إلكتروني متكامل مع نظام إدارة شامل للمنتجات والطلبات.",
            features: [
                "عرض المنتجات مع صور عالية الجودة",
                "نظام بحث وفلترة متقدم",
                "سلة تسوق ذكية",
                "نظام دفع آمن ومتعدد الطرق",
                "لوحة تحكم إدارية شاملة",
                "إدارة المخزون والطلبات",
                "نظام تقييم المنتجات",
                "تصميم متجاوب لجميع الأجهزة"
            ],
            technologies: "HTML, CSS, JavaScript, PHP, MySQL, Bootstrap"
        },
        scooter: {
            title: "تطبيق استئجار السكوترات",
            description: "تطبيق ذكي لاستئجار السكوترات الكهربائية مع نظام تتبع GPS ودفع فوري.",
            features: [
                "العثور على أقرب سكوتر متاح",
                "فتح السكوتر عبر QR Code",
                "تتبع الرحلة بـ GPS",
                "نظام دفع فوري وآمن",
                "حساب التكلفة في الوقت الفعلي",
                "لوحة تحكم لإدارة الأسطول",
                "نظام صيانة وتتبع البطارية"
            ],
            technologies: "Flutter, Dart, Firebase, Google Maps API, Stripe"
        },
        gym: {
            title: "تطبيقات إدارة الجيم",
            description: "نظام متكامل يتكون من تطبيقين منفصلين - واحد للمستخدمين وآخر للمدربين.",
            features: [
                "تطبيق المستخدمين: حجز الحصص والمتابعة",
                "تطبيق المدربين: إدارة الجدول والعملاء",
                "نظام متابعة التمارين والتقدم",
                "جدولة الحصص والتنبيهات",
                "نظام دفع الاشتراكات",
                "تتبع الأداء والإحصائيات",
                "نظام تواصل بين المدرب والعميل"
            ],
            technologies: "Flutter, Dart, Firebase, PHP, MySQL"
        }
    };
    
    const project = projectDetails[projectType];
    if (project) {
        const modal = `
            <div id="projectModal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                backdrop-filter: blur(10px);
            ">
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 30px;
                    border-radius: 20px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    border: 1px solid rgba(255,255,255,0.2);
                ">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h2 style="color: white; margin: 0; font-size: 24px;">${project.title}</h2>
                        <button onclick="closeProjectModal()" style="
                            background: rgba(255,255,255,0.2);
                            border: none;
                            color: white;
                            font-size: 24px;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">&times;</button>
                    </div>
                    <p style="color: rgba(255,255,255,0.9); line-height: 1.6; margin-bottom: 20px;">${project.description}</p>
                    <h3 style="color: white; margin-bottom: 15px;">المميزات الرئيسية:</h3>
                    <ul style="color: rgba(255,255,255,0.9); line-height: 1.8; margin-bottom: 20px;">
                        ${project.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
                    </ul>
                    <h3 style="color: white; margin-bottom: 10px;">التقنيات المستخدمة:</h3>
                    <p style="color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.1); padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);">${project.technologies}</p>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modal);
    }
}

// Function to close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.remove();
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (modal && event.target === modal) {
        closeProjectModal();
    }
});