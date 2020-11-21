// Sample card from Airbnb
import { Box, Image, Badge, Skeleton, Button } from "@chakra-ui/core";
import { StarIcon } from "@chakra-ui/icons";

function ProductCard({ product }) {

  const property = {
    imageUrl: product.images?.images?.[0],
    imageAlt: "",
    title: product.name,
    formattedPrice: product.price,
    reviewCount: 0,
    rating: 0,
  };

  return (
    <Box maxW="xs" shadow="md" rounded="lg" overflow="hidden">
      <Image maxW="xs" width='100%' maxH={300} objectFit='contain' ignoreFallback src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge style={{ marginRight: 10 }} rounded="full" colorScheme='teal'>
            Nuevo
          </Badge>
          {product.isFreeShipping && (
            <Badge rounded="full" colorScheme='yellow'>
              Envio Gratis
            </Badge>
          )}
        </Box>
        <Box
          mt="1"
          fontSize={12}
          fontWeight="bold"
          as="h4"
          color
          isTruncated
        >
          {property.title}
        </Box>

        <Box
          fontWeight="semibold"
        >
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="xs">
            / clp
          </Box>
        </Box>

        <Box d="flex" mt="2" justifyContent='space-between' alignItems="center">
          <Box d="flex" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reseñas
            </Box>
          </Box>
          <Button colorScheme="teal" size="sm">
            Comprar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;