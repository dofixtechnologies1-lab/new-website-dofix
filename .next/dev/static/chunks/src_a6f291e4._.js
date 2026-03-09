(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Shop/shopData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const shopData = [
    // ================= AC REPAIR INSTALLATION =================
    {
        id: 10,
        title: "Jet Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/ac/jet-service.png"
            ],
            previews: [
                "/images/ac/jet-service.png"
            ]
        },
        description: {
            about: [
                "High-pressure jet cleaning of indoor unit",
                "Deep cleaning of cooling coil",
                "Blower and fan cleaning",
                "Drain line cleaning",
                "Outdoor condenser jet wash",
                "Cooling performance testing"
            ],
            benefits: [
                "Strong and fast cooling",
                "Removal of deep dirt and blockages",
                "Improved airflow",
                "Reduced electricity consumption",
                "Extended AC lifespan"
            ]
        },
        variants: [
            {
                id: 101,
                title: "1 AC Foam Jet Service",
                price: 599,
                oldPrice: 699,
                description: "Complete AC inspection and jet cleaning"
            },
            {
                id: 102,
                title: "2 AC Foam Jet Service",
                price: 799,
                oldPrice: 899,
                description: "Deep jet cleaning for two AC units"
            }
        ]
    },
    {
        id: 12,
        title: "Gas Charging",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 6,
        imgs: {
            thumbnails: [
                "/images/ac/gas-charging.jpg"
            ],
            previews: [
                "/images/ac/gas-charging.jpg"
            ]
        },
        variants: []
    },
    {
        id: 5,
        title: "AC Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-repair.jpg"
            ],
            previews: [
                "/images/ac/ac-repair.jpg"
            ]
        },
        variants: []
    },
    {
        id: 6,
        title: "AC Installation & Uninstallation",
        category: "acrepairinstallation",
        subCategory: "ac-installation-uninstallation",
        rateCardKey: "ac",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ac-install-uninstall.jpg"
            ],
            previews: [
                "/images/ac/ac-install-uninstall.jpg"
            ]
        },
        variants: []
    },
    // ================= HOME CLEANING =================
    {
        id: 3,
        title: "Deep Cleaning",
        category: "home-cleaning",
        subCategory: "deep-cleaning",
        rateCardKey: "cleaning",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/cleaning/deep.jpg"
            ],
            previews: [
                "/images/cleaning/deep.jpg"
            ]
        },
        variants: []
    },
    {
        id: 7,
        title: "Bathroom Cleaning",
        category: "home-cleaning",
        subCategory: "bathroom-cleaning",
        rateCardKey: "cleaning",
        reviews: 9,
        imgs: {
            thumbnails: [
                "/images/cleaning/bathroom.jpg"
            ],
            previews: [
                "/images/cleaning/bathroom.jpg"
            ]
        },
        variants: []
    },
    {
        id: 8,
        title: "Kitchen Cleaning",
        category: "home-cleaning",
        subCategory: "kitchen-cleaning",
        rateCardKey: "cleaning",
        reviews: 11,
        imgs: {
            thumbnails: [
                "/images/cleaning/kitchen.jpg"
            ],
            previews: [
                "/images/cleaning/kitchen.jpg"
            ]
        },
        variants: []
    },
    {
        id: 9,
        title: "Full Home Cleaning",
        category: "home-cleaning",
        subCategory: "full-home",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/cleaning/full-home.jpg"
            ],
            previews: [
                "/images/cleaning/full-home.jpg"
            ]
        },
        variants: []
    },
    // ================= PAINTING =================
    {
        id: 4,
        title: "Wall Painting",
        category: "painting",
        subCategory: "wall-paint",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/painting/wall.jpg"
            ],
            previews: [
                "/images/painting/wall.jpg"
            ]
        },
        variants: []
    }
];
const __TURBOPACK__default__export__ = shopData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceVariantPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shop/shopData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ServiceVariantPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = Number(params?.id);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((s)=>s.id === id);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectCartItems"]);
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTotalPrice"]);
    const [selectedVariant, setSelectedVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!service) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10",
        children: "Service Not Found"
    }, void 0, false, {
        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
        lineNumber: 28,
        columnNumber: 24
    }, this);
    // const [selectedVariant, setSelectedVariant] = useState<any>(null);
    const handleAdd = (variant)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItemToCart"])({
            id: variant.id,
            title: variant.title,
            price: variant.price,
            discountedPrice: variant.oldPrice,
            quantity: 1,
            imgs: service.imgs
        }));
    };
    const getItemQuantity = (variantId)=>{
        const item = cartItems.find((item)=>item.id === variantId);
        return item ? item.quantity : 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray pt-32 pb-40 pt-55 px-4 md:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm overflow-hidden mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: service.imgs.thumbnails[0],
                                alt: service.title,
                                width: 1200,
                                height: 400,
                                className: "w-full h-[220px] object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 text-white text-2xl font-semibold",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 flex items-center text-gray-600 text-sm border-t",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: "🏠"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            "AC Service, Repair & Installation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl md:text-2xl font-bold mb-6",
                children: "Available Services"
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: service.variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setSelectedVariant(variant),
                        className: "bg-white rounded-xl shadow-sm p-4 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: service.imgs.thumbnails[0],
                                        alt: variant.title,
                                        width: 160,
                                        height: 110,
                                        className: "rounded-lg object-cover h-[110px] w-[160px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAdd(variant),
                                        className: "bg-[#2b7a9a] text-white px-6 py-2 rounded-md text-sm",
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mt-4",
                                children: variant.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-800",
                                        children: [
                                            "₹",
                                            variant.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    variant.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-through text-gray-400 ml-2",
                                        children: [
                                            "₹",
                                            variant.oldPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-2",
                                children: variant.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-500 italic text-sm",
                                        children: "The Dofix Rate Card"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push(`/rate-card/${service.rateCardKey}`),
                                        className: "text-[#3683ab] font-medium",
                                        children: "View Rate Card"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, variant.id, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            service.description?.about && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "About This Service"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 158,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5 space-y-1 text-gray-600",
                        children: service.description.about.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, index, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 161,
                                columnNumber: 9
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 159,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 157,
                columnNumber: 3
            }, this),
            service.description?.benefits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Benefits"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 169,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5 space-y-1 text-gray-600",
                        children: service.description.benefits.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, index, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 172,
                                columnNumber: 9
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 168,
                columnNumber: 3
            }, this),
            cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[600px] bg-[#2b7a9a] text-white rounded-xl shadow-lg flex justify-between items-center px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: [
                                    cartItems.length,
                                    " item in cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold",
                                children: [
                                    "₹",
                                    totalPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/cart"),
                        className: "bg-white text-[#2b7a9a] px-6 py-2 rounded-lg font-semibold",
                        children: "View Cart"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ServiceVariantPage, "E6MgcI9MXBa2ShEVbAFOZIEZkec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = ServiceVariantPage;
var _c;
__turbopack_context__.k.register(_c, "ServiceVariantPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a6f291e4._.js.map