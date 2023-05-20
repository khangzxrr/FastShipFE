import React from 'react'
import { Descriptions, Input, Divider, Typography } from 'antd'
const { Title, Paragraph, Text, Link } = Typography;
export default function AddContact() {
    return (
        <div style={{ display: 'flex', width: '90%', marginLeft: '5%', marginRight: '5%' }}>
            <div className='contactform'>
                <Descriptions title="Contact Form" layout="vertical">
                    <Descriptions.Item label="Email" span={3}><Input /></Descriptions.Item>
                    <Descriptions.Item label="Telephone" span={3}><Input /></Descriptions.Item>
                    <Descriptions.Item label="Address" span={3}><Input /></Descriptions.Item>
                </Descriptions>
            </div>
            <div style={{ width: '68%', backgroundColor:'aliceblue', padding:'0px 10px 0px 10px'}}>
                <Typography>
                    <Title>Điều khoản sử dụng dịch vụ mua hộ</Title>
                    <Paragraph>
                    * Số tiền đặt mua sẽ được hoàn trả nếu khách hàng không nhận được hàng trong trường hợp người bán không chuyển hàng hoặc quá 8 tuần kể từ khi hàng tới kho ở nước ngoài của FastShip. Ngoại trừ có thỏa thuận khác.
                    </Paragraph>
                    <Paragraph>
                    * FastShip.com cam kết mua hàng theo đúng yêu cầu của khách hàng.
                    </Paragraph>
                    <Paragraph>
                    * Thời gian vận chuyển từ 7-15 ngày làm việc kể từ ngày chúng tôi nhận được hàng tại văn phòng ở nước ngoài. Thời gian vận chuyển hàng về có thể bị thay đổi do nhà cung cấp hoặc hải quan duyệt xét. Sau 8 tuần kể từ ngày hàng hóa tới văn phòng XanhLo.com tại các nước (không bao gồm thời gian do các điều kiện bất khả kháng như thiên tai, dịch bệnh, hỏa hoạn,...), nếu quý khách chưa nhận được hàng tại Việt Nam, sẽ hoàn lại số tiền quý khách đã đặt cọc.
                    </Paragraph>
                    <Paragraph>
                    * Trong trường hợp , sau khi FastShip.com đã đặt mua nhưng nhà cung cấp không chuyển hàng hoặc quý khách đổi ý muốn hủy đơn , Fastship.com sẽ tiến hành hoàn số tiền cọc còn lại sau khi đã trừ phí xử lý 5% và phí chuyển tiền qua ngân hàng (nếu có). Số tiền này sẽ được hoàn trả sau khi FastShip.com nhận được tiền từ nhà cung cấp.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    )
}