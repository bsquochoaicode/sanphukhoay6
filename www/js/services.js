angular.module('app.services', [])

.factory('danhSachMenu', [function(){
	menus = [
			{
			sref: "menu.11",
			title: "1.1 Khái niệm hệ khuẩn âm đạo (microbiome)"
			},
			{
			sref: "menu.12",
			title: "1.2 Viêm âm đạo do vi khuẩn (Bacterial vaginosis)"
			},
			{
			sref: "menu.13",
			title: "1.3 Viêm âm đạo do Candida sp"
			},
			{
			sref: "menu.14",
			title: "1.4 Diễn tiến tự nhiên của lộ tuyến cổ tử cung"
			},
			{
			sref: "menu.15",
			title: "1.5  Biểu hiện qua soi cổ tử cung của các tổn thương không ác tính ở cổ tử cung"
			},
			{
			sref: "menu.16",
			title: "1.6  Phết mỏng tế bào cổ tử cung tầm soát ung thư cổ tử cung"
			},
			{
			sref: "menu.21",
			title: "2.1  U xơ tử cung và các vấn đề có liên quan"
			},
			{
			sref: "menu.22",
			title: "2.2  Vai trò của hình ảnh học trong các bệnh lý lành tính ở tử cung"
			},
			{
			sref: "menu.23",
			title: "2.3  Bệnh tuyến cơ tử cung"
			},
			{
			sref: "menu.24",
			title: "2.4  Nguyên lý tiếp cận điều trị u xơ-cơ tử cung"
			},
			{
			sref: "menu.25",
			title: "2.5 Điều trị ngoại khoa u xơ-cơ tử cung"
			},
			{
			sref: "menu.26",
			title: "2.6 Điều trị nội khoa u xơ-cơ tử cung"
			},
			{
			sref: "menu.31",
			title: "3.1 Dẫn nhập về các bệnh lây qua tình dục"
			},
			{
			sref: "menu.32",
			title: "3.2 Viêm âm đạo do Trichomonas vaginalis"
			},
			{
			sref: "menu.33",
			title: "3.3 Nhiễm Treponema pallidum"
			},
			{
			sref: "menu.34",
			title: "3.4 Nhiễm Neisseria gonorrhoeae"
			},
			{
			sref: "menu.35",
			title: "3.5 Nhiễm Chlamydia trachomatis"
			},
			{
			sref: "menu.36",
			title: "3.6 Vi sinh học Chlamydia trachomatis và đáp ứng miễn dịch vật chủ"
			},
			{
			sref: "menu.37",
			title: "3.7 Nhiễm HIV"
			},
			{
			sref: "menu.38",
			title: "3.8 Viêm vùng chậu"
			},
			{
			sref: "menu.41",
			title: "4.1 Quản lý xuất huyết tử cung bất thường ở phụ nữ độ tuổi sinh sản"
			},
			{
			sref: "menu.42",
			title: "4.2 Quản lý xuất huyết tử cung cơ năng ở tuổi dậy thì"
			},
			{
			sref: "menu.43",
			title: "4.3 Quản lý xuất huyết tử cung bất thường liên quan đến rối loạn phóng noãn"
			},
			{
			sref: "menu.44",
			title: "4.4 Quản lý xuất huyết tử cung bất thường liên quan đến thai kỳ"
			},
			{
			sref: "menu.45",
			title: "4.5 Quản lý xuất huyết tử cung bất thường ở tuổi quanh mãn kinh"
			},
			{
			sref: "menu.46",
			title: "4.6 Quản lý xuất huyết tử cung bất thường liên quan đến các nguyên nhân ác tính"
			},
			{
			sref: "menu.51",
			title: "5.1 Human Papilloma Virus"
			},
			{
			sref: "menu.52",
			title: "5.2 Từ chuyển sản đến dị sản cổ tử cung"
			},
			{
			sref: "menu.53",
			title: "5.3 Diễn tiến tự nhiên của các tân sinh trong biểu mô cổ tử cung"
			},
			{
			sref: "menu.54",
			title: "5.4 Các công cụ dùng trong quản lý tân sinh trong biểu mô cổ tử cung"
			},
			{
			sref: "menu.55",
			title: "5.5 ASC-US và các vấn đề có liên quan"
			},
			{
			sref: "menu.56",
			title: "5.6 LSIL và các vấn đề có liên quan"
			},
			{
			sref: "menu.57",
			title: "5.7 HSIL và các vấn đề có liên quan"
			},
			{
			sref: "menu.58",
			title: "5.8 Vaccine Human Papilloma Virus"
			},
			{
			sref: "menu.61",
			title: "6.1 Nguyên tắc tiếp cận và quản lý một khối ở phần phụ"
			},
			{
			sref: "menu.71",
			title: "7.1 Giải phẫu học, mô học và hình ảnh học tuyến vú"
			},
			{
			sref: "menu.72",
			title: "7.2 Chiến lược tầm soát ung thư vú"
			},
			{
			sref: "menu.73",
			title: "7.3 Bệnh lý lành tính của tuyến vú"
			},
			{
			sref: "menu.74",
			title: "7.4 Ung thư vú"
			},
			{
			sref: "menu.81",
			title: "8.1 Các đặc tính của một phương pháp tránh thai"
			},
			{
			sref: "menu.82",
			title: "8.2 Các nguyên lý của tránh thai bằng cách dùng nội tiết ngoại sinh"
			},
			{
			sref: "menu.83",
			title: "8.3 Viên thuốc tránh thai nội tiết estro-progestogen phối hợp (COCs)"
			},
			{
			sref: "menu.84",
			title: "8.4 Viên thuốc tránh thai chỉ có progestogen (POPs)"
			},
			{
			sref: "menu.85",
			title: "8.5 Các hệ thống phóng thích steroid tác dụng dài (LASDS)"
			},
			{
			sref: "menu.86",
			title: "8.6 Các phương pháp tránh thai khẩn cấp"
			},
			{
			sref: "menu.87",
			title: "8.7 Dụng cụ tử cung tránh thai"
			},
			{
			sref: "menu.88",
			title: "8.8 Các phương pháp tránh thai rào chắn"
			},
			{
			sref: "menu.89",
			title: "8.9 Các phương pháp tránh thai vĩnh viễn"
			},
			{
			sref: "menu.91",
			title: "9.1 Phá thai an toàn"
			},
			{
			sref: "menu.92",
			title: "9.2 Phá thai nội khoa"
			},
			{
			sref: "menu.93",
			title: "9.3 Phá thai ngoại khoa"
			},
			{
			sref: "menu.101",
			title: "10.1 Sinh lý chu kỳ buồng trứng"
			},
			{
			sref: "menu.102",
			title: "10.2 Sinh lý buồng trứng ở tuổi dậy thì và quanh mãn kinh"
			},
			{
			sref: "menu.103",
			title: "10.3 Các cơ quan đích của các steroid sinh dục"
			},
			{
			sref: "menu.104",
			title: "10.4 Giao tử ở loài người"
			},
			{
			sref: "menu.105",
			title: "10.5 Sinh lý hiện tượng thụ tinh"
			},
			{
			sref: "menu.106",
			title: "10.6 Sự làm tổ của trứng đã thụ tinh"
			},
		]
		return menus;
}])

.service('BlankService', [function(){

}])
