
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Product } from "@/lib/supabase";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg">
      {product.image_url ? (
        <div className="aspect-square w-full overflow-hidden">
          <img 
            src={product.image_url} 
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="aspect-square w-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Sem imagem</span>
        </div>
      )}
      <CardHeader className="p-4 pb-0">
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="font-bold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
      </CardFooter>
    </Card>
  );
}
