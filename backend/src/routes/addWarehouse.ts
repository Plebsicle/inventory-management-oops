import { Hono } from 'hono';
import { SignatureKey } from 'hono/utils/jwt/jws';
import { WarehouseController } from '../controllers/WarehouseController';

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: SignatureKey
    }
}>();

app.post('/addwarehouse', async (c) => {
    const warehouseController = new WarehouseController(c.env.DATABASE_URL, c.env.JWT_SECRET);
    return await warehouseController.addWarehouse(c);
});

export default app;