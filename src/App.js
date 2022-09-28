import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Stack,
  Heading,
  Text,
  Flex,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import packages from './data/packages';

function App() {
  const [estimate, setEstimate] = useState(null);

  const formik = useFormik({
    initialValues: {
      width: 0,
      height: 0,
      length: 0,
      weight: 0,
    },
    onSubmit: values => {
      const dimension = values.width + values.height + values.length;
      const weight = values.weight;

      const estimatedParcel = packages.find(
        parcel => parcel.maxWeight >= weight && parcel.maxDimension >= dimension
      );
      setEstimate(estimatedParcel);
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box p="8" textAlign="center" fontSize="xl">
        <Stack spacing="48px" direction="row">
          <Box
            borderWidth="1px"
            borderRadius="lg"
            textAlign="center"
            fontSize="xl"
            p="4"
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="width">Width (Cm.)</FormLabel>
                  <Input
                    id="width"
                    name="width"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.width}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="height">Height (Cm.)</FormLabel>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.height}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="length">Length (Cm.)</FormLabel>
                  <Input
                    id="length"
                    name="length"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.length}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="weight">Weight (Kg.)</FormLabel>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                  />
                </FormControl>
              </VStack>
              <Button mt="4" colorScheme="teal" type="submit">
                Estimate price
              </Button>
            </form>
          </Box>
          {estimate != null && (
            <Flex
              direction="column"
              borderWidth="1px"
              borderRadius="lg"
              justifyContent="center"
              fontSize="xl"
              w="50%"
              p="4"
            >
              <Heading>Size {estimate.packageSize}</Heading>
              <Text fontSize="xl" mt="16px">
                Dimension ( Width + Height + Length ) &le;{' '}
                {estimate.maxDimension}
              </Text>
              <Text fontSize="xl">Maximum Weight {estimate.maxWeight} Kg.</Text>

              <Center w="100%">
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  textAlign="center"
                  fontSize="xl"
                  p="4"
                  m="4"
                >
                  <Text fontSize="3xl">Delivery Fee</Text>
                  <Text fontSize="2xl">{estimate.deliveryFee} THB</Text>
                </Box>
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  textAlign="center"
                  fontSize="xl"
                  p="4"
                  m="4"
                >
                  <Text fontSize="3xl">Package Fee</Text>
                  <Text fontSize="2xl">{estimate.packageFee} THB</Text>
                </Box>
              </Center>
            </Flex>
          )}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
