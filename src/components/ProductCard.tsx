
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/lib/supabase";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-4 pb-0">
        <h3 className="font-semibold text-lg line-clamp-1">{product.cod_barras}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm line-clamp-3">
          {product.descricao_completa}
        </p>
      </CardContent>
    </Card>
  );
}
