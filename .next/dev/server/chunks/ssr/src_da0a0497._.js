module.exports = [
"[project]/src/components/Shop/shopData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const shopData = [
    // ================= AC REPAIR INSTALLATION =================
    // {
    //   id: 1,
    //   title: "AC Installation",
    //   category: "acrepairinstallation",
    //   subCategory: "ac-installation",
    //   rateCardKey: "ac",
    //   reviews: 15,
    //   imgs: {
    //     thumbnails: ["/images/ac/ac-main.jpg"],
    //     previews: ["/images/ac/ac-main.jpg"],
    //   },
    //   variants: [],
    // },
    {
        id: 2,
        title: "AC Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 20,
        imgs: {
            thumbnails: [
                "/images/ac/ac-service.jpg"
            ],
            previews: [
                "/images/ac/ac-service.jpg"
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
}),
"[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceVariantPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/cart-slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shop/shopData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ServiceVariantPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const id = Number(params?.id);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((s)=>s.id === id);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectCartItems"]);
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTotalPrice"]);
    if (!service) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10",
        children: "Service Not Found"
    }, void 0, false, {
        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
        lineNumber: 25,
        columnNumber: 24
    }, this);
    const handleAdd = (variant)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addItemToCart"])({
            id: variant.id,
            title: variant.name,
            price: variant.price,
            discountedPrice: variant.discountedPrice,
            quantity: 1,
            imgs: {
                thumbnails: [
                    variant.image
                ],
                previews: [
                    variant.image
                ]
            }
        }));
    };
    const getItemQuantity = (variantId)=>{
        const item = cartItems.find((item)=>item.id === variantId);
        return item ? item.quantity : 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 pb-32 pt-32 px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8",
                children: service.title
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: service.variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-xl shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: variant.image,
                                alt: variant.name,
                                width: 400,
                                height: 250,
                                className: "rounded-lg mb-4 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: variant.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 line-through mr-2",
                                        children: [
                                            "₹",
                                            variant.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-600 font-bold text-lg",
                                        children: [
                                            "₹",
                                            variant.discountedPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAdd(variant),
                                className: "bg-blue-600 text-white px-4 py-2 rounded-lg",
                                children: "Add to Cart"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            getItemQuantity(variant.id) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-gray-600",
                                children: [
                                    "In Cart: ",
                                    getItemQuantity(variant.id)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, variant.id, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: [
                            "Total: ₹",
                            totalPrice
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/cart"),
                        className: "bg-green-600 text-white px-6 py-2 rounded-lg",
                        children: [
                            "View Cart (",
                            cartItems.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/(pages)/ac-services/[id]/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_da0a0497._.js.map