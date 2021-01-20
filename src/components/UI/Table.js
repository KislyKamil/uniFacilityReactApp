import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: 'Autor',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Tytuł badania',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Zakład',
                field: 'office',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Data pubilkacji',
                field: 'date',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320'
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170'
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: '66',
                date: '2009/01/12',
                salary: '$86'
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: '22',
                date: '2012/03/29',
                salary: '$433'
            },
            {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '33',
                date: '2008/11/28',
                salary: '$162'
            },
            {
                name: 'Angelica Ramos',
                position: 'Chief Executive Officer (CEO)',
                office: 'London',
                age: '47',
                date: '2009/10/09',
                salary: '$1'
            },
            {
                name: 'Gavin Joyce',
                position: 'Developer',
                office: 'Edinburgh',
                age: '42',
                date: '2010/12/22',
                salary: '$92'
            },
            {
                name: 'Jennifer Chang',
                position: 'Regional Director',
                office: 'Singapore',
                age: '28',
                date: '2010/11/14',
                salary: '$357'
            },
            {
                name: 'Brenden Wagner',
                position: 'Software Engineer',
                office: 'San Francisco',
                age: '28',
                date: '2011/06/07',
                salary: '$206'
            },
            {
                name: 'Fiona Green',
                position: 'Chief Operating Officer (COO)',
                office: 'San Francisco',
                age: '48',
                date: '2010/03/11',
                salary: '$850'
            },
            {
                name: 'Shou Itou',
                position: 'Regional Marketing',
                office: 'Tokyo',
                age: '20',
                date: '2011/08/14',
                salary: '$163'
            },
            {
                name: 'Michelle House',
                position: 'Integration Specialist',
                office: 'Sidney',
                age: '37',
                date: '2011/06/02',
                salary: '$95'
            },
            {
                name: 'Suki Burks',
                position: 'Developer',
                office: 'London',
                age: '53',
                date: '2009/10/22',
                salary: '$114'
            },
            {
                name: 'Prescott Bartlett',
                position: 'Technical Author',
                office: 'London',
                age: '27',
                date: '2011/05/07',
                salary: '$145'
            },
            {
                name: 'Howard Hatfield',
                position: 'Office Manager',
                office: 'San Francisco',
                age: '51',
                date: '2008/12/16',
                salary: '$164'
            },
            {
                name: 'Hope Fuentes',
                position: 'Secretary',
                office: 'San Francisco',
                age: '41',
                date: '2010/02/12',
                salary: '$109'
            },
            {
                name: 'Vivian Harrell',
                position: 'Financial Controller',
                office: 'San Francisco',
                age: '62',
                date: '2009/02/14',
                salary: '$452'
            },
            {
                name: 'Timothy Mooney',
                position: 'Office Manager',
                office: 'London',
                age: '37',
                date: '2008/12/11',
                salary: '$136'
            },
            {
                name: 'Jackson Bradshaw',
                position: 'Director',
                office: 'New York',
                age: '65',
                date: '2008/09/26',
                salary: '$645'
            },
            {
                name: 'Olivia Liang',
                position: 'Support Engineer',
                office: 'Singapore',
                age: '64',
                date: '2011/02/03',
                salary: '$234'
            },
            {
                name: 'Bruno Nash',
                position: 'Software Engineer',
                office: 'London',
                age: '38',
                date: '2011/05/03',
                salary: '$163'
            },
            {
                name: 'Sakura Yamamoto',
                position: 'Support Engineer',
                office: 'Tokyo',
                age: '37',
                date: '2009/08/19',
                salary: '$139'
            },
            {
                name: 'Thor Walton',
                position: 'Developer',
                office: 'New York',
                age: '61',
                date: '2013/08/11',
                salary: '$98'
            },
            {
                name: 'Finn Camacho',
                position: 'Support Engineer',
                office: 'San Francisco',
                age: '47',
                date: '2009/07/07',
                salary: '$87'
            },
            {
                name: 'Serge Baldwin',
                position: 'Data Coordinator',
                office: 'Singapore',
                age: '64',
                date: '2012/04/09',
                salary: '$138'
            },
            {
                name: 'Zenaida Frank',
                position: 'Software Engineer',
                office: 'New York',
                age: '63',
                date: '2010/01/04',
                salary: '$125'
            }
        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            small
            searchLabel="Szukaj"
            entriesLabel="Ilość wpisów na strone"
            paginationLabel={["Poprzednia", "Następna"]}
            info={true}
            infoLabel={["Załadowano", "do", "z", "wpisów"]}
            data={data}
        />
    );
}

export default DatatablePage;