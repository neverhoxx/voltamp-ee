"use client";

import { useCart } from "@/context/CartContext";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet";

import en from '@/locales/cart/en.json';
import lv from '@/locales/cart/lv.json';
import et from '@/locales/cart/et.json';

interface CartDrawerProps {
    locale: string;
    children: React.ReactNode;
}

export default function CartDrawer({ locale, children }: CartDrawerProps) {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const total = cart.reduce((sum: number, item: { product: { price: number; }; quantity: number; }) => sum + item.product.price * item.quantity, 0);

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#f5f5f5]">
                <SheetHeader>
                    <SheetTitle>
                        {cart.length > 0 ? `${t["eiTühi"]} ${cart.length}` : `${t["tühi"]} 🛒`}
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto pr-2">
                    {cart.map((item) => (
                        <li key={item.product.id} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
                            <div className="flex-1">
                                <p className="font-medium">{item.product.name}</p>
                                <p className="text-sm text-neutral-500">
                                    {item.product.price} € × {item.quantity}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                                    className="w-14 border px-2 rounded-md"
                                />
                                <button onClick={() => removeFromCart(item.product.id)} className="text-red-500">
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))}
                </div>

                <SheetFooter className="bg-white p-8">
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">
                                {t["kokku"]}
                                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                            </span>
                            <span className="font-bold text-lg">{total.toFixed(2)} €</span>
                        </div>
                        <button className="h-12 w-full text-base bg-black text-white rounded-lg">
                            {t["esita"]}
                        </button>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
