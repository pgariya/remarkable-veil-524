import { useState } from "react";
import { Badge, Box, Button, Card, CardBody, Flex, HStack, Input } from "@chakra-ui/react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { CENTER, FILL_PARENT, ORANGE, SB, X2LARGE, YELLOW } from "../../../constants/typography";

function ExcelToJson({ getProductData }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleConvertToJSON = () => {
    if (!file) {
      alert("Please choose an Excel file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const headers = jsonData[0];
      const dataArray = jsonData.slice(1).map((row) => {
        const obj = {};
        row.forEach((cell, index) => {
          obj[headers[index]] = cell;
        });
        return obj;
      });
      getProductData(dataArray);
    console.log(dataArray)
      //   const blob = new Blob([JSON.stringify(dataArray)], { type: 'application/json' });
      //   saveAs(blob, 'data.json');
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <Card w={FILL_PARENT}>
      <CardBody>
        <Box w={FILL_PARENT}>
            <Badge fontSize={X2LARGE} colorScheme={YELLOW}>Bulk Upload using excel file</Badge>
          <Flex alignItems={CENTER} justifyContent={SB}>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              mb={4}
            />
            <Button colorScheme={ORANGE} onClick={handleConvertToJSON}>Upload Data</Button>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ExcelToJson;
