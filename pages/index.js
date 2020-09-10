import React from 'react';
const Index = () => {
    return (
        <div>
            <h2>JSON MOCK DATA</h2>
            <ul>
                <li><a href="/api/users">Users</a></li>
                <li><a href="/api/blogs">Blogs</a></li>
                <li>
                    Shopping
                    <ul>
                        <li>
                            Furniture
                            <ul>
                                <li><a href="/api/shopping/furniture/categories">Categories</a></li>
                                <li>
                                    Products
                                    <ul>
                                        <li><a href="/api/shopping/furniture/products?category=couches">Couches</a></li>
                                        <li><a href="/api/shopping/furniture/products?category=chairs">Chairs</a></li>
                                        <li><a href="/api/shopping/furniture/products?category=dining">Dining</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Index;