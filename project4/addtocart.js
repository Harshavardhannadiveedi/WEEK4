
const product = [
    {
        id: 0,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACasE-jcmsWXi1sD8olL_fk6zZyROw__MdWg5davJIFN9_yEXad2TMJwNhkDHraECmolxVxRA91AmqiebrybID8TW7Clfi_fP6WdNn_tgNjAmyDr03kYeWJpT_AMgWLg9E_i2eM8DlQ1V3Bf4PQmCw_-q6hI87EyQ4Le_OFvJd_InSo1P4lQS0lEGtJ0UlAUaEwuZwtL0Blbpu620D3dq9msoJOemBbn8MXrC_TqIPejKOew5XjzF97WKrdaLtHLdM3G06x2izvsk1vogBEBFsePaezxbEuY98CJvko6LYeCBu5HkYZg1DHFE9j6YA051PzCWCfVSyg5kY7wsRR1ODHsiXMK_f5UzREbXhkPAaY6e6deZqD2BcZ61KI47_RCg-m0VvvCORahkbX4bJl1Qrg5gBWjHMrOfN_RbXQ9s8DSMmXgoFWyMetPxxIy3kddF-c/p.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACZm7r7H_cRVbMJ9d8-NQQm1blKKJ0V8Ax1eGh2p5aO9YzAZao3_aYUTL2vqF29a5cyU6cmOE8EejtHsFxH4Ae465kquaG1HVqKlOBJEUUJJcN0wr5_xd0l3NhsIEhOrtvBB1pY_1hIAqvWF5n15s0jydq2HQtxvNeu4mlSkae8f9vL8LGKh4fKxVZiLVnNo20_WLmbWsLiBX4oL6hXLChzR_0OGxhAiccLaB2y0AzFshcc2ysaK-szUeqfkx4WrVDn7TIICEiL_a5rBXsIbnNrdar_7jEK8uXoLu45LCT2RsMnp3Sy5JMZxRDmMOC5NTctEQ5NIKV0whlkaVwPtHtyxAhH0DbN1eW6fZeUDHhns232LIUGqBYP9kILxIcj48i-iiOhPSuf27EWNXqbO4FD9nzlvPpxGJt1pWyrrMWiJ0uP73o9otlIXloEavxDY0_0/p.jpeg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACYFaYM4T2FCxaRmH-M6B45GSoUB_pAGLjW6B04i89n3VAxMK0qxdleDso7CjBP8zuOKvEixEr4-KWJbYTP5z6sqzEox2tHyDi6m91pi6Rywi4_sDqZnFo82n8GRFAnnmJklGTzh09ogc3rHvMf9CwLuhfgv5e2xsdGTnyfNQy1MwB_Z6T3p76Ov71Fvdk9B49f3k_pkk-G_zp-OfzucYc6BZVp9-JQVBlQgnp8UIw8f2QLolrD7o9tY3Im7Wc_JMP-KAss3nWUDbMtB4dv04QcK9m3_uLyB8IsqrLqQPNhj9lT4FpwNotlYZdZD7gb1mC0Wt4bd1_bSyVXvrBT4F3_5CdvTI1qndaKaXT3HbWKHpH3M9GFPiJ-XcYpiHMynDpwUFaqUg8cUinH6ELLu9my6AdWHS4sQuwRfaKAjOltfLlqsH49VuBqGSt1mcGNXbJE/p.jpeg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACb28NoO8z8dlIYM7xLC5sUEG3WH6uvhBMNg9EZ_ltRKF6tdv-6JTWQ1uTjHGqKq-urJUKsZHDN11uK0glY6lNekcwLfdR-GNiMfPy2RNWk28oEogo_pjQwWv_NT6NmNb56xUWIM2X6nVMDNA-sjecHIlkj278ix9M6YAs90hZpeq3nXpQFFzIYBcf57qetvUbua46kSemAqDFEVyXFgj2JQtI5YdkCunno_nracc_xoMM6arkVH5vZ4HlnAXMdLfK-2C8OmJ4AI7ew7HNiWghCPiVq4m-a3ga9U55_uhS6_ZwairpXgpHeehqQhqLAJw48EPs3yXBV0I8nAX3zOrxHz8Gbi1B5YVruviFNY8IcUx2RKeV1Ed9rKSIev9boocqAJWjlqIeB3o5gFGvtHysgN1iWCccHoATa8j-53g0kL18GY4VX9sd6AiqyKXkIHnsQ/p.jpeg',
        title: 'Head Phones',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')
var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
    
}