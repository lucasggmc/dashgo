import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Lucas Carneiro</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    asdas@asdas.com
                </Text>
            </Box>

            <Avatar size="md" name="Lucas Carneiro" src="https://github.com/lucasggmc.png" />
        </Flex>
    );
}