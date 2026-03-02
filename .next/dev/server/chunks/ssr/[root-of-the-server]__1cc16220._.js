module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(site)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/Shop/shopData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubCategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shop/shopData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function SubCategoryPage({ params }) {
    const { category, subcategory } = await params;
    const filteredServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filter((item)=>item.category === category && item.subCategory === subcategory);
    if (filteredServices.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-20 text-center text-red-600 text-xl",
            children: "No Services Found"
        }, void 0, false, {
            fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[600px] mx-auto py-16 px-4 pt-45",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-6 capitalize",
                children: subcategory.replace(/-/g, " ")
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block mb-10 px-6 py-3 border-2 border-[#3683ab] text-[#3683ab] rounded-full text-sm font-medium",
                children: [
                    filteredServices.length,
                    " Services Available"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: filteredServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-lg p-4 flex items-center justify-between hover:shadow-xl transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-40 h-40 rounded-2xl overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: service.imgs.thumbnails[0],
                                            alt: service.title,
                                            width: 160,
                                            height: 160,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-semibold",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-gray-500",
                                                children: [
                                                    "⭐ 4.7 (",
                                                    service.reviews,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 inline-block px-5 py-2 border border-[#3683ab] text-[#3683ab] rounded-full text-sm",
                                                children: [
                                                    service.variants.length,
                                                    " Options Available"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-[#3683ab] font-medium",
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/ac-services/${service.id}`,
                                className: "w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-[#3683ab] hover:bg-[#3683ab] hover:text-white transition",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1cc16220._.js.map