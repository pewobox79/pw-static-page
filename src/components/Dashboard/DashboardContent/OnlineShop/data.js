export const ShoppingData = [
    {
        productId: 7766879,
        title: "Prod 1",
        description: "This is the product 1 description here",
        price: {
            value: 20,
            currency: "Euro"
        },
        imageFront: {
            src: "/src/assets/images/shop/t-shirt-frontview.png",
            alt: ""
        },
        imageBack: {
            src: "/src/assets/images/shop/t-shirt-back.jpeg",
            alt: ""
        },
        specialOffer: {
            isActive: true,
            specialOfferVariant: {
                price: {
                    value: 10
                }
            }
        },
        variants: {
            sizeVariations: [
                {
                    type: "x-small",
                    value: "xs",
                    status: false
                }, {
                    type: "small",
                    value: "sm",
                    status: true
                }, {
                    type: "large",
                    value: "lg",
                    status: false
                }, {
                    type: "x-large",
                    value: "xl",
                    status: true
                }],
            colorVariants: ["green", "red", "blue"]
        }
    },{
        productId: 8028908,
        title: "Prod2",
        description: "This is the product 2 description here",
        price: {
            value: 20,
            currency: "Euro"
        },
        imageFront: {
            src: "/src/assets/images/shop/t-shirt2-front.jpeg",
            alt: ""
        },
        imageBack: {
            src: "/src/assets/images/shop/t-shirt2-back.jpeg",
            alt: ""
        },
        specialOffer: {
            isActive: false,
            specialOfferVariant: {
                price: {
                    value: 10
                }
            }
        },
        variants: {
            sizeVariations: [
                {
                    type: "x-small",
                    value: "xs",
                    status: true
                }, {
                    type: "small",
                    value: "sm",
                    status: true
                }, {
                    type: "large",
                    value: "lg",
                    status: false
                }, {
                    type: "x-large",
                    value: "xl",
                    status: true
                }],
            colorVariants: ["green", "red", "blue"]
        }
    },{
        productId: 8987656567,
        title: "Prod3",
        description: "This is the product 3 description here",
        price: {
            value: 20,
            currency: "Euro"
        },
        imageFront: {
            src: "/src/assets/images/shop/t-shirt2-back.jpeg",
            alt: ""
        },
        imageBack: {
            src: "/src/assets/images/shop/t-shirt2-front.jpeg",
            alt: ""
        },
        specialOffer: {
            isActive: false,
            specialOfferVariant: {
                price: {
                    value: 10
                }
            }
        },
        variants: {
            sizeVariations: [
                {
                    type: "x-small",
                    value: "xs",
                    status: false
                }, {
                    type: "small",
                    value: "sm",
                    status: true
                }, {
                    type: "large",
                    value: "lg",
                    status: true
                }, {
                    type: "x-large",
                    value: "xl",
                    status: true
                }],
            colorVariants: ["green", "red", "blue"]
        }
    },

]
