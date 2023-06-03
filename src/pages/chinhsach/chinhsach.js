import { Typography } from 'antd'
const { Title, Paragraph, Text } = Typography;
const Rules = () => {
    return (
        <div className="container" style={{ marginBottom: '70px' }}>
            <Typography>
                <Title>Những trường hợp được đổi hàng tại FastShip</Title>
                <Paragraph>
                    <Text strong>
                        Khi nhận được đơn hàng từ khách hàng, FastShip cam kết mua đúng sản phẩm quý khách đã đặt hàng qua link đã được gửi. Tuy nhiên, trong một số trường hợp rủi ro, chúng tôi sẽ thực hiện một số chính sách đổi hàng nhằm bảo vệ tối đa quyền lợi của khách hàng.
                    </Text>
                </Paragraph>
                <Title level={5}>
                    1.Trường hợp nếu do lỗi của seller:
                </Title>
                <Paragraph>
                    Chúng tôi cam kết mua đúng link sản phẩm mà khách hàng đã gửi, trong trường hợp hàng hóa bị lỗi, hỏng hóc do seller hoặc seller cung cấp hàng sai, thiếu hoặc nhầm,…( nhà cung cấp hàng) chúng tôi sẽ hỗ trợ bạn liên hệ với seller để xử lý.
                </Paragraph>
                <Paragraph>
                    - Nếu seller không đồng ý đổi trả hàng: nếu quá trình thương lượng giữa khách hàng và seller không thành công, khách sẽ chịu trách nhiệm.
                </Paragraph>
                <Paragraph>
                    - Nếu seller đồng ý đổi trả hàng: FastShip sẽ tiến hành vận chuyển số hàng này qua bên Mỹ để tiến hành đổi trả, chi phí vận chuyển sẽ do khách hàng chi trả.
                </Paragraph>
                <Title level={5}>
                    2. Trường hợp nếu do lỗi vận chuyển:
                </Title>
                <Paragraph>
                    Trong quá trình vận chuyển, nếu  trường hợp hàng hóa bị thất lạc, hỏng hóc hoặc bể vỡ do vận chuyển, tùy vào mức độ mà chúng tôi sẽ có hướng giải quyết thỏa đáng nhất:
                </Paragraph>
                <Paragraph>
                    - Với dịch vụ mua hộ, nếu hàng hóa không đến được tay khách hàng, chúng tôi sẽ hoàn lại toàn bộ số tiền mà khách đã đặt cọc.
                </Paragraph>
                <Paragraph>
                    - Với dịch vụ vận chuyển hàng, nếu hàng hóa vận chuyển bị mất mát hoặc thất lạc, chúng tôi sẽ đền bù tối đa gấp 3 lần phí vận chuyển. Nếu trong trường hợp khách hàng có sử dụng dịch vụ có bảo hiểm, chúng tôi sẽ tiến hành đền bù 100% giá trị đơn hàng.
                </Paragraph>
                <Paragraph>
                    - Hàng hóa bị bể vỡ hoặc sứt mẻ, chúng tôi sẽ hoàn lại toàn bộ số tiền mà khách đã thanh toán.
                </Paragraph>
                <Title level={5}>
                    3. Chính sách bảo hành sản phẩm:
                </Title>
                <Paragraph>
                    - Nếu sản phẩm còn trong thời gian bảo hành, khách hàng vui lòng gởi sản phẩm đến kho để nhân viên tiếp nhận và gởi đi bảo hành.
                </Paragraph>
                <Title level={5}>
                    4. Yêu cầu khác:
                </Title>
                <Paragraph>
                    - FastShip khuyến khích bạn quay lại video clip mở hàng để làm bằng chứng khi có khiếu nại xảy ra. Video nên thể hiện rõ các yếu tố sau:
                    6 mặt bên ngoài của kiện hàng
                    Đúng thông tin đơn hàng đã đặt (mã đơn hàng, mã vận đơn...)
                    Tình trạng, số lượng, và lỗi của sản phẩm nhận được
                </Paragraph>
            </Typography>
        </div>
    )
}
export default Rules