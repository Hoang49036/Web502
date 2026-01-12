// Hàm tính điểm trung bình sử dụng Arrow Function và kiểu trả về rõ ràng
const tinhDiemTrungBinh = (...diem: number[]): number => {
  if (diem.length === 0) return 0;
  const tong = diem.reduce((sum, d) => sum + d, 0);
  return Number((tong / diem.length).toFixed(2));
};


// Định nghĩa kiểu hàm
type KiemTraChanLe = (n: number) => "chẵn" | "lẻ";

// Triển khai hàm
const kiemTraChanLe: KiemTraChanLe = (n) => (n % 2 === 0 ? "chẵn" : "lẻ");


// Hàm tạo thông tin người dùng với tham số mặc định và tùy chọn
const taoNguoiDung = (ten: string, tuoi?: number, vaiTro: string = "user"): string => {
  const thongTin: string[] = [`Tên: ${ten}`];
  if (typeof tuoi === "number") thongTin.push(`Tuổi: ${tuoi}`);
  thongTin.push(`Vai trò: ${vaiTro}`);
  return thongTin.join(", ");
};


// Hàm gộp danh sách sản phẩm bằng Spread
const gopSanPham = (ds1: string[], ds2: string[]): string[] => {
  return [...ds1, ...ds2];
};

// Hàm in danh sách sản phẩm bằng Rest
const inSanPham = (...sanPham: string[]): void => {
  console.log("Danh sách sản phẩm:");
  sanPham.forEach((sp, i) => console.log(`${i + 1}. ${sp}`));
};

