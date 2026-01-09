// Định nghĩa enum cho rate
enum Rate {
  low = "Thấp",
  medium = "Trung bình",
  hight = "Cao",
}

// Định nghĩa type Product
type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
  description?: string; // thêm sau bằng map
};

// Tạo mảng listProducts với ít nhất 5 phần tử
let listProducts: Product[] = [
  { name: "Sản phẩm A", price: 10, sale: true, rate: Rate.hight },
  { name: "Sản phẩm B", price: 4, sale: false, rate: Rate.medium },
  { name: "Sản phẩm C", price: 6, sale: true, rate: Rate.low },
  { name: "Sản phẩm D", price: 8, sale: false, rate: Rate.medium },
  { name: "Sản phẩm E", price: 3, sale: true, rate: Rate.hight },
];

// Hàm thêm mới 1 phần tử vào mảng listProducts
function addProduct(product: Product) {
  // sử dụng map để thêm key description
  const newProduct = {
    ...product,
    description: product.price > 5 ? "Tốt" : "Bình thường",
  };
  listProducts = [...listProducts, newProduct];
}

// Hàm hiển thị danh sách sản phẩm
function displayProducts() {
  listProducts.forEach((p) => {
    console.log(
      `Tên: ${p.name}, Giá: ${p.price}, Sale: ${p.sale}, Đánh giá: ${p.rate}`
    );
  });
}

// Hàm tính tổng giá bán sản phẩm
function totalPrice(): number {
  return listProducts.reduce((sum, p) => sum + p.price, 0);
}

// Hàm lọc sản phẩm đang Sale và đánh giá từ Trung bình trở lên
function filterProducts(): Product[] {
  return listProducts.filter(
    (p) => p.sale && (p.rate === Rate.medium || p.rate === Rate.hight)
  );
}


