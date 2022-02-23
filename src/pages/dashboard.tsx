import { Flex, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from 'next/dynamic';
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
      foreColor: theme.colors.gray[500],
  },
  grid: {
      show: false,
  },
  dataLabels:{
      enabled: false,
  },
  tooltip: {
      enabled: false,
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: theme.colors.gray[600]
      },
      axisTicks: {
          color: theme.colors.gray[600]
      },
      categories: [
          '2021-06-23T00:00:00.000Z',
          '2021-06-24T00:00:00.000Z',
          '2021-06-25T00:00:00.000Z',
          '2021-06-26T00:00:00.000Z',
          '2021-06-27T00:00:00.000Z',
          '2021-06-28T00:00:00.000Z',
          '2021-06-29T00:00:00.000Z',
      ],
  },

  fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'dark',
          opacityFrom: 0.7
      },
  }

};

const series = [
  {
      name: 'series1',
      data: [21, 65 ,142 , 65, 43,131, 87]
  }
]

export default function Dashboard(){
  return (
  <Flex direction={"column"} h={"100vh"}> 
    <Header />

    <Flex w={"100%"} my={"6"} maxWidth={"1480"} mx={"auto"} px={"6"}>
      <Sidebar />

      {/* <SimpleGrid flex={"1"} gap={4} minChildWidth={"320px"}  >
        <Box 
        p={"8"}
        border={"1px solid gray"}
        bgColor={"white"}  
        borderRadius={"4"} 
        // pb={"4"}
        >
          <Text>Usuarios cadastrados</Text>
          <Chart options={options} series={series} type={"area"} height={160} />
        </Box>
        <Box 
        p={"8"} 
        border={"1px solid gray"}
        bgColor={"white"} 
        borderRadius={"4"}
         
        // pb={"4"}
        >
          <Text>Taxa de abertura</Text>
        </Box>
      </SimpleGrid> */}
    </Flex>
  </Flex>
  )
}