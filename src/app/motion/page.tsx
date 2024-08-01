"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Reorder } from "framer-motion";

export default function Motion() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
            <Reorder.Item key={item} value={item} >
                <Card className="mb-4">
                    <CardHeader>
                    <CardTitle>Item {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Natus inventore ipsam cumque consequatur aliquam facere odit
                        asperiores ratione reprehenderit maxime officiis minima,
                        consectetur tenetur iure doloremque excepturi ab repudiandae
                        temporibus!
                    </p>
                    </CardContent>
                </Card>
            </Reorder.Item>          
        ))}
      </Reorder.Group>
    </main>
  );
}
