import React, {useState} from "react";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio/src/radio";
import { RadioGroup } from "@chakra-ui/react/dist/declarations/src";


export const DeliveryOptions: React.FC = () => {

    const [displayOptions, setDisplayOptions] = useState<boolean>(false)

    return (
        <>
            <SimpleGrid  columns={3} border="1px" borderColor="gray.200" borderRadius="5px" m={2} p={2} background={'#E2E8F0'}>
                <Box>
                    Váš nejlevnější nákup
                </Box>
                <Box style={{textAlign: "right", fontSize: "0.625rem", justifyContent: "flex-end", display: "flex", alignItems: "center"}}>
                    Zítra
                </Box>
                <Box style={{textAlign: "right", justifyContent: "flex-end", display: "flex", alignItems: "center"}}>
                    200 Kč
                </Box>
            </SimpleGrid>

            <SimpleGrid  columns={3} border="1px" borderColor="gray.200" borderRadius="5px" m={2} p={2}>
                <Box>
                    <span>Nejlevnější nákup</span><br/>
                    <span style={{fontSize: '0.625rem'}}>Přijede z Rohlíku a iTesca</span>
                </Box>
                <Box style={{textAlign: "right", fontSize: "0.625rem", justifyContent: "flex-end", display: "flex", alignItems: "center"}}>
                    Za 4 dny
                </Box>
                <Box style={{textAlign: "right", justifyContent: "flex-end", display: "flex", alignItems: "center"}}>
                    <div>
                        <span style={{fontSize: '0.625rem'}}>Ušetříte 20 Kč</span><br/>
                        <span>180 Kč</span>
                    </div>
                </Box>
            </SimpleGrid>

            <SimpleGrid  columns={3} border="1px" borderColor="gray.200" borderRadius="5px" m={2} p={2}>
                <Box>
                    Chci to najednou
                </Box>
                <Box>
                </Box>
                <Box style={{textAlign: "right", justifyContent: "flex-end", display: "flex", alignItems: "center"}}>
                    190 - 220 Kč
                </Box>
                {!displayOptions && (
                    <>
                        {/*<RadioGroup>*/}
                        {/*    <Radio>iTesco</Radio>*/}
                        {/*    <Radio>Rohlík</Radio>*/}
                        {/*</RadioGroup>*/}
                    </>
                )}
            </SimpleGrid>
        </>
    )
}
