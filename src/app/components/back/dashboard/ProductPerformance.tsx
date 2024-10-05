import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material'
import DashboardCard from '@/app/components/back/shared/DashboardCard'

const products = [
    {
        id: "1",
        name: "Oliver Thompson",
        post: "Admin",
        pname: "Elite Admin",
        priority: "Low",
        pbg: "primary.main",
        budget: "4.95",
    },
    {
        id: "2",
        name: "Sophia Mitchell",
        post: "Project Manager",
        pname: "Marketing Mavericks",
        priority: "Medium",
        pbg: "primary.main",
        budget: "19.8",
    },
    {
        id: "3",
        name: "Liam Anderson",
        post: "Project Manager",
        pname: "Data Pioneers",
        priority: "High",
        pbg: "error.main",
        budget: "52.5",
    },
    {
        id: "4",
        name: "Isabella Parker",
        post: "Marketing Manager",
        pname: "Innovation Team",
        priority: "Critical",
        pbg: "success.main",
        budget: "2.8",
    },
]


const ProductPerformance = () => {
    return (

        <DashboardCard title="Product Performance">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Assigned
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Priority
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Budget
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">${product.budget}k</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    )
}

export default ProductPerformance
